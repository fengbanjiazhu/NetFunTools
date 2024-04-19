import { CiCircleQuestion } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type CustomizedToolTipProps = {
  tips: string[];
};

function CustomizedToolTip({ tips }: CustomizedToolTipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CiCircleQuestion size={18} />
        </TooltipTrigger>
        <TooltipContent>
          <ul>
            {tips.map((e, index) => {
              return <li key={index}>- {e}</li>;
            })}
          </ul>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default CustomizedToolTip;
