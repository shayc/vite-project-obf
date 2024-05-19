import type { Meta, StoryObj } from "@storybook/react";
import { NavButtons } from "./NavButtons";

const meta = {
  title: "Design System/Components/NavButtons",
  component: NavButtons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
