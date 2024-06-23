import type { Meta, StoryObj } from "@storybook/react";
import { Pictogram } from "./Pictogram";

const meta = {
  title: "Design System/Board/Pictogram",
  component: Pictogram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { control: "text" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Pictogram>;

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
    src: "https://via.placeholder.com/150",
    label: "Label",
  },
};
