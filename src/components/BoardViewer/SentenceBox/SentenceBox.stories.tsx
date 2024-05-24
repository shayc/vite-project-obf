import type { Meta, StoryObj } from "@storybook/react";
import { SentenceBox } from "./SentenceBox";

const meta = {
  title: "Design System/Components/SentenceBox",
  component: SentenceBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SentenceBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '640px', overflow: "hidden" }}>
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
