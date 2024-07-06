import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SentenceBox } from "./SentenceBox";

const meta = {
  title: "Design System/Board/SentenceBox",
  component: SentenceBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onBackspaceClick: fn(), onClearClick: fn() },
} satisfies Meta<typeof SentenceBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "640px", overflow: "hidden" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    value: [
      { label: "Hello", src: "" },
      { label: "World", src: "" },
    ],
  },
};
