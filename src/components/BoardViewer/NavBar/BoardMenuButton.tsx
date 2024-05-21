import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
} from "@fluentui/react-components";

const tempList = [
  {
    id: 1,
    name: "Home board",
  },
  {
    id: 2,
    name: "Bedtime",
  },
];

interface BoardMenuButtonProps {
  className?: string;
  title?: string;
}

export const BoardMenuButton = (props: BoardMenuButtonProps) => {
  const { title } = props;

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton size="large" appearance="transparent">
          {title}
        </MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {tempList.map((item) => (
            <MenuItem key={item.id}>{item.name}</MenuItem>
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
