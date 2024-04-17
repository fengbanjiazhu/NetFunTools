import { useState, useRef } from "react";
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

import { binaryChecksumRegex } from "@/utils/constant";
import { decimalToBinary, binaryToDecimal } from "@/utils/helper";

import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const maxNumArr: { [key: string]: number } = {
  "8": 255,
  "16": 65535,
};

function ChecksumCard() {
  const [inputStr, setInputStr] = useState<string[]>([]);
  const [firstLen, setFirstLen] = useState<number | null>(null);
  const [checkSum, setCheckSum] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const errorToast = (message: string) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message,
      action: <ToastAction altText="Try again">I got it!</ToastAction>,
    });
  };

  const addInput = () => {
    const currentValue = inputRef.current?.value.trim();

    if (!currentValue || !binaryChecksumRegex.test(currentValue)) {
      errorToast("Checksum has to be 8 or 16 digit");
      return;
    }

    if (!firstLen) setFirstLen(currentValue.length);

    if (firstLen && currentValue.length !== firstLen) {
      errorToast("Inputs must have same length");
      return;
    }

    setInputStr(() => [...inputStr, currentValue]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const clearInput = () => {
    setInputStr([]);
    setCheckSum(null);
    setFirstLen(null);
  };

  const calculateChecksum = () => {
    if (inputStr.length < 1 || !firstLen) return;
    const numArr = inputStr.map((e) => binaryToDecimal(e));
    const maxNum = maxNumArr[firstLen.toString()];

    let result = 0;

    numArr.forEach((e) => {
      result += e;
      if (result > maxNum) result -= maxNum;
      return result;
    });

    const checksum: string = decimalToBinary(maxNum - result).padStart(firstLen, "0");

    setCheckSum(checksum);
  };

  return (
    <Card className="my-6 sm:min-w-64 max-w-lg">
      <CardHeader>
        <CardTitle>Checksum Calculator</CardTitle>
        <CardDescription>Calculating Checksum for UDP</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full max-w-lg items-center space-x-2 mb-2">
          <Input ref={inputRef} placeholder={"input binary"} />
        </div>
        <div className="gap-2 space-y-1  space-x-2 ">
          <Button onClick={addInput}>+</Button>
          <Button disabled={inputStr.length < 2} onClick={calculateChecksum}>
            Calculate
          </Button>
          <Button
            disabled={inputStr.length < 1}
            onClick={() => {
              clearInput();
            }}
          >
            Clear
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className="gap-2">
          {inputStr && (
            <>
              {inputStr.map((e, index) => (
                <p key={index}>{e}</p>
              ))}
            </>
          )}

          {checkSum && (
            <>
              <br></br>
              <p>The checksum is :</p>
              <CopyDisplay copyValue={checkSum}></CopyDisplay>
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ChecksumCard;
