import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "./NavBar";

const meta = {
  title: "Design System/Board/NavBar",
  component: NavBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Example board"
  },
};
