import { ScrollArea } from "@/components/ui/scroll-area";

type UpdateLogProp = {
  updateLog: {
    date: string;
    content: string;
  }[];
  title: string;
};

function UpdateLog({ title, updateLog }: UpdateLogProp) {
  return (
    <div className="text-muted-foreground my-4">
      <h3 className="sticky text-xl font-bold mb-2 ml-1">{title}</h3>
      <ScrollArea className="h-[200px] w-[300px] sm:w-[400px] rounded-md border p-4">
        <ul>
          {updateLog.map((e, index) => {
            return (
              <li key={index} className="mb-2">
                <p className="text-lg font-semibold">{e.date}</p>
                <p>{e.content}</p>
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </div>
  );
}

export default UpdateLog;
