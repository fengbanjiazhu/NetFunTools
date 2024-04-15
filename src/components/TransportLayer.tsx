import ChecksumCard from "./ChecksumCard";

function TransportLayer() {
  return (
    <>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-2xl">
          Transport layer tools
        </h2>
      </div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <ChecksumCard />
      </div>
    </>
  );
}

export default TransportLayer;
