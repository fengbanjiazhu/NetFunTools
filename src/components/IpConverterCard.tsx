import { useState, useRef } from "react";
import { decimalToBinary, binaryToDecimal } from "@/utils/helper";

import CopyDisplay from "./CopyDisplay";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { reformHelper } from "@/utils/helper";

type IpConverterCardProps = {
  regex: RegExp;
  type: "IP" | "Binary";
};

function IpConverterCard({ regex, type }: IpConverterCardProps) {
  const [ipStr, setIpStr] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const currentType = type == "IP";
  const exampleStr = currentType ? "192.168.0.1" : "10000010.10011011.11000000.00111000";

  const errorToast = (message: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
      action: <ToastAction altText="Try again">I got it!</ToastAction>,
    });
  };

  function onSetIp() {
    const currentValue = inputRef.current?.value.trim();

    if (!currentValue) {
      errorToast("You can't leave input area blank");
      return inputRef.current?.focus();
    }
    if (!regex.test(currentValue)) {
      errorToast("You must follow the IPv4 format");
      return inputRef.current?.focus();
    }

    setIpStr(currentValue);
  }

  function clearField(ref: React.RefObject<HTMLInputElement>) {
    setIpStr("");
    if (ref.current) {
      ref.current.value = "";
    }
  }

  const ipToBin = (num: number) => decimalToBinary(num).padStart(8, "0");

  const afterConvert = reformHelper(ipStr, currentType ? ipToBin : binaryToDecimal);

  return (
    <Card className="my-6 sm:min-w-64 max-w-lg">
      <CardHeader>
        <CardTitle>IP to Binary</CardTitle>
        <CardDescription>From IP to Binary.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full max-w-lg items-center space-x-2">
          <Input ref={inputRef} placeholder={exampleStr} />
          <Button onClick={onSetIp}>Convert</Button>
          <Button
            disabled={!ipStr}
            onClick={() => {
              clearField(inputRef);
            }}
          >
            Clear
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="gap-2">
          {ipStr && (
            <>
              <p>
                Result of <i className="sm:font-bold sm:tracking-wide">{ipStr} </i> is :
              </p>
              <br></br>
              <CopyDisplay copyValue={afterConvert}></CopyDisplay>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default IpConverterCard;
