import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { BoardButton } from "./BoardButton";

const meta = {
  title: "Design System/Components/BoardButton",
  component: BoardButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof BoardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Hello",
  },
};