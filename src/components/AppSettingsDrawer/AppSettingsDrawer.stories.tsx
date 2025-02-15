import type { Meta, StoryObj } from "@storybook/react";
import { AppSettingsDrawer } from "./AppSettingsDrawer";

const meta = {
  title: "Design System/App/AppSettingsDrawer",
  component: AppSettingsDrawer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppSettingsDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
  args: {
    isOpen: true,
    onClose: () => console.log("onClose"),
  },
};
