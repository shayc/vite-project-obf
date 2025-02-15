import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { BoardButton } from "./BoardButton";

const meta = {
  title: "Design System/Board/BoardButton",
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
  decorators: [
    (Story) => (
      <div style={{ width: "128px", height: "128px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: "Hello",
  },
};
