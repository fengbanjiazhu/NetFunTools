import { useState, useRef } from "react";
import image from "@/assets/TCP_oneway_Example.jpg";
import { Label } from "@/components/ui/label";
import { isAllPositiveIntegers } from "@/utils/helper";
import SeqAckResultCard from "./SeqAckResultCard";

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

function TCPAckSeqCard() {
  const [inputNum, setInputNum] = useState<number[]>([]);

  const inputRefX = useRef<HTMLInputElement>(null);
  const inputRefY = useRef<HTMLInputElement>(null);
  const inputRefN = useRef<HTMLInputElement>(null);

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
    const currentX = inputRefX.current?.value.trim();
    const currentY = inputRefY.current?.value.trim();
    const currentN = inputRefN.current?.value.trim();

    if (!currentX || !currentY || !currentN) {
      errorToast("Values cannot be empty");
      return;
    }

    const test = [Number(currentX), Number(currentY), Number(currentN)];

    if (!isAllPositiveIntegers(test)) {
      errorToast("Values must be number");
      return;
    }

    setInputNum(() => [...test]);
  };

  const clearInput = () => {
    if (inputRefX.current) inputRefX.current.value = "";
    if (inputRefY.current) inputRefY.current.value = "";
    if (inputRefN.current) inputRefN.current.value = "";
    setInputNum([]);
  };

  return (
    <Card className="my-3 sm:min-w-64 max-w-lg">
      <CardHeader>
        <CardTitle>TCP ACK Seq tool</CardTitle>

        <CardDescription>Calculating ACK Seq number for TCP transport</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={image} alt="an image"></img>
        <div className="flex w-full max-w-lg items-center space-x-2 mb-2">
          <Label htmlFor="sendbaseX">X:</Label>
          <Input id="sendbaseX" ref={inputRefX} placeholder={"input Client SendBase X number"} />
        </div>
        <div className="flex w-full max-w-lg items-center space-x-2 mb-2">
          <Label htmlFor="sendbaseY">Y:</Label>
          <Input id="sendbaseY" ref={inputRefY} placeholder={"input Server SendBase Y number"} />
        </div>
        <div className="flex w-full max-w-lg items-center space-x-2 mb-2">
          <Label htmlFor="dataLength">N:</Label>
          <Input id="dataLength" ref={inputRefN} placeholder={"input Data length N number"} />
        </div>
        <div className="gap-2 space-y-1  space-x-2 ">
          <Button onClick={addInput}>Calculate</Button>
          <Button
            onClick={() => {
              clearInput();
            }}
          >
            Clear
          </Button>
        </div>
      </CardContent>
      <CardFooter>{inputNum.length > 2 && <SeqAckResultCard inputNum={inputNum} />}</CardFooter>
    </Card>
  );
}

export default TCPAckSeqCard;
