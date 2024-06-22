import type { Meta, StoryObj } from "@storybook/react";
import { AppDrawer } from "./AppDrawer";

const meta = {
  title: "Design System/Components/AppDrawer",
  component: AppDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
  args: {
    isOpen: true,
    onClose: () => console.log("onClose"),
    children: <>Children</>,
  },
};
