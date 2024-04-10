// import React from "react";
import { useState, useRef, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

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
  const [copied, setCopied] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const currentType = type == "IP";
  const exampleStr = currentType ? "192.168.0.1" : "10000010.10011011.11000000.00111000";
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    if (!copied) return;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("triggered!");
      setCopied(false);
    }, 5000);
  }, [copied]);

  const errorToast = (message: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
      action: <ToastAction altText="Try again">I got it!</ToastAction>,
    });
  };

  function onSetIp() {
    const currentValue = inputRef.current?.value;

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
    setCopied(false);
    setIpStr("");
    if (ref.current) {
      ref.current.value = "";
    }
  }

  const ipToBin = (num: number) => num.toString(2).padStart(8, "0");
  const binToIp = (str: string) => parseInt(str, 2);

  const afterConvert = reformHelper(ipStr, currentType ? ipToBin : binToIp);

  return (
    <Card className="my-6 sm:min-w-full">
      <CardHeader>
        <CardTitle>IP to Binary</CardTitle>
        <CardDescription>From IP to Binary.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input className="w-98" ref={inputRef} placeholder={exampleStr} />
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
                Result of <i className="font-bold tracking-wide">{ipStr} </i> is :
              </p>
              <br></br>
              <div className="flex gap-4 text-xl">
                <p className="tracking-wider">{afterConvert}</p>
                <CopyToClipboard onCopy={() => setCopied(true)} text={afterConvert}>
                  <button>{copied ? <LuCopyCheck /> : <LuCopy />}</button>
                </CopyToClipboard>
              </div>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default IpConverterCard;
