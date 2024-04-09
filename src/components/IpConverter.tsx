import { useState, useRef } from "react";

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

const ipv4Regex =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const binaryIPv4Regex = /^(?:[01]{8}\.){3}[01]{8}$/;

function IpConverter() {
  const [ipStr, setIpStr] = useState("");
  const [binStr, setBinStr] = useState("");
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  function reformHelper(string: string, func: (e: any) => {}) {
    const array = string.split(".");
    const newArr = array.map((e) => {
      const element: number = e * 1;
      return func(element);
    });
    return newArr.join(".");
  }
  const errorToast = (message: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
      action: <ToastAction altText="Try again">I got it!</ToastAction>,
    });
  };

  function onSetIp() {
    const currentValue = inputRef1.current?.value;
    if (!currentValue) {
      errorToast("You can't leave input area blank");
      return inputRef1.current?.focus();
    }
    if (!ipv4Regex.test(currentValue)) {
      errorToast("You must follow the IPv4 ip format");
      return inputRef1.current?.focus();
    }

    setIpStr(currentValue);
  }

  function onSetBin() {
    const currentValue = inputRef2.current?.value;
    if (!currentValue) {
      errorToast("You can't leave input area blank");
      return inputRef2.current?.focus();
    }
    if (!ipv4Regex.test(currentValue)) {
      errorToast("You must follow the IPv4 binary format");
      return inputRef2.current?.focus();
    }

    setBinStr(currentValue);
  }

  return (
    <div className="sm:flex gap-6">
      {/* <h3>
        {ipStr} ➡️ {reformHelper(ipStr, (num: number) => num.toString(2).padStart(8, 0))}
      </h3>

      <p>Test2:</p>
      <h3>
        {binStr} ➡️ {reformHelper(binStr, (str: string) => parseInt(str, 2))}
      </h3> */}

      <Card className="my-6 sm:min-w-full">
        <CardHeader>
          <CardTitle>IP to Binary</CardTitle>
          <CardDescription>From IP to Binary.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input ref={inputRef1} placeholder="192.168.0.1" />
            <Button onClick={onSetIp}>Convert</Button>
          </div>
        </CardContent>
        <CardFooter>
          <div className="sm:flex gap-2">
            {ipStr && <p>Result of {ipStr} is</p>}
            {""}
            {ipStr && (
              <p>{reformHelper(ipStr, (num: number) => num.toString(2).padStart(8, "0"))}</p>
            )}
          </div>
        </CardFooter>
      </Card>

      <Card className="my-6 sm:min-w-full">
        <CardHeader>
          <CardTitle>Binary to IP</CardTitle>
          <CardDescription>From Binary to IP.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input ref={inputRef2} placeholder="10000010.10011011.11000000.00111000" />
            <Button onClick={onSetBin}>Convert</Button>
          </div>
        </CardContent>
        <CardFooter>
          {binStr && <p>Result of {binStr} :</p>}
          {binStr && reformHelper(binStr, (str: string) => parseInt(str, 2))}
        </CardFooter>
      </Card>
    </div>
  );
}

export default IpConverter;
