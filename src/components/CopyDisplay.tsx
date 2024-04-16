import { LuCopyCheck, LuCopy } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";

function CopyDisplay({ copyValue }: { copyValue: string }) {
  const [copied, setCopied] = useState(false);

  const debounceSetCopy = useCallback(
    debounce(() => {
      setCopied(false);
    }, 4000),
    []
  );

  useEffect(() => {
    debounceSetCopy();
  }, [copied]);

  return (
    <div className="flex gap-4 text-sm sm:text-xl">
      <p className="sm:tracking-wider">{copyValue}</p>
      <CopyToClipboard onCopy={() => setCopied(true)} text={copyValue}>
        <button>{copied ? <LuCopyCheck /> : <LuCopy />}</button>
      </CopyToClipboard>
    </div>
  );
}

export default CopyDisplay;
