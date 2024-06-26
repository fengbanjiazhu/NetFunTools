import NetworkLayer from "./NetworkLayer";
import { useState } from "react";
import ToolNav from "./ToolNav";
import TransportLayer from "./TransportLayer";

const toolPageContent = [
  { buttonTag: "Network Layer", fieldName: "network" },
  { buttonTag: "Transport Layer", fieldName: "transport" },
];

function ToolPage() {
  const [fieldName, setFieldName] = useState("network");

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center sm:items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          This is Tool page
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I haven't design the whole app yet, just putting everything here for now.
        </p>
      </div>
      <ToolNav items={toolPageContent} onSetField={setFieldName} currentField={fieldName} />
      <div>
        {fieldName === "network" && <NetworkLayer />}
        {fieldName === "transport" && <TransportLayer />}
      </div>
    </section>
  );
}

export default ToolPage;
