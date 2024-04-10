import IpConverterCard from "./IpConverterCard";
import { ipv4Regex, binaryIPv4Regex } from "@/utils/constant";

function IpConverter() {
  return (
    <div className="gap-6 min-w-full">
      <IpConverterCard type="IP" regex={ipv4Regex} />
      <IpConverterCard type="Binary" regex={binaryIPv4Regex} />
    </div>
  );
}

export default IpConverter;
