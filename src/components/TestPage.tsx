import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { useState } from "react";
import TransportLayer from "./TransportLayer";
import NetworkLayer from "./NetworkLayer";

function TestPage() {
  const [fieldName, setFieldName] = useState("network");

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          This is Test page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">For testing use only.</p>
      </div>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <button
                onClick={() => {
                  setFieldName("network");
                }}
              >
                Network Layer
              </button>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <button
                onClick={() => {
                  setFieldName("transport");
                }}
              >
                Transport Layer
              </button>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      <div>
        {fieldName === "network" && <NetworkLayer />}
        {fieldName === "transport" && <TransportLayer />}
      </div>
    </section>
  );
}

export default TestPage;
