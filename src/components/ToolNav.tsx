import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

type ToolNavItem = {
  buttonTag: string;
  fieldName: string;
};

type ToolNavProps = {
  items: ToolNavItem[];
  onSetField: React.Dispatch<React.SetStateAction<string>>;
  currentField: string;
};

function ToolNav({ items, onSetField, currentField }: ToolNavProps) {
  return (
    <Menubar>
      {items.map((item) => {
        return (
          <MenubarMenu key={item.fieldName}>
            <MenubarTrigger
              onClick={() => {
                onSetField(item.fieldName);
              }}
            >
              <p className={currentField === item.fieldName ? "font-bold" : ""}>{item.buttonTag}</p>
            </MenubarTrigger>
          </MenubarMenu>
        );
      })}
    </Menubar>
  );
}

export default ToolNav;
