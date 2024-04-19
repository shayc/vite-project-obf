import type { Meta, StoryObj } from "@storybook/react";
import { Pictogram } from "./Pictogram";

const meta = {
  title: "Design System/Components/Pictogram",
  component: Pictogram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "string" },
    label: { control: "string" },
  },
} satisfies Meta<typeof Pictogram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    label: "Placeholder",
  },
};
