import IpConverter from "./IpConverter";

function NetworkLayer() {
  return (
    <>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Network layer tools
        </h2>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <IpConverter />
      </div>
    </>
  );
}

export default NetworkLayer;
