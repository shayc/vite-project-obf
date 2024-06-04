import type { Meta, StoryObj } from "@storybook/react";
import lotsOfStuffBoard from "../../open-board-format/examples/lots_of_stuff.json";
import { Board } from "./Board";

const meta = {
  title: "Design System/Components/Board",
  component: Board,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "640px", height: "480px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    board: lotsOfStuffBoard,
  },
};
