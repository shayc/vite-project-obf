import type { Meta, StoryObj } from "@storybook/react";
import { TitleBar } from "./TitleBar";

const meta = {
  title: "Design System/Components/TitleBar",
  component: TitleBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TitleBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
