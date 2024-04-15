import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

type ToolNavItem = {
  buttonTag: string;
  fieldName: string;
};

type ToolNavProps = {
  items: ToolNavItem[];
  onSetField: React.Dispatch<React.SetStateAction<string>>;
};

function ToolNav({ items, onSetField }: ToolNavProps) {
  return (
    <Menubar>
      {items.map((item) => {
        return (
          <MenubarMenu>
            <MenubarTrigger
              onClick={() => {
                onSetField(item.fieldName);
              }}
            >
              {item.buttonTag}
            </MenubarTrigger>
          </MenubarMenu>
        );
      })}
    </Menubar>
  );
}

export default ToolNav;
