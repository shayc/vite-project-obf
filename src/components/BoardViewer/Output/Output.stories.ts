import type { Meta, StoryObj } from "@storybook/react";
import { Output } from "./Output";

const meta = {
  title: "Design System/Components/Output",
  component: Output,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Output>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: [
      { label: "Hello", src: "" },
      { label: "World", src: "" },
    ],
  },
};
