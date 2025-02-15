import type { Meta, StoryObj } from "@storybook/react";
import { mapOBFToBoard } from "../../../../db/use-boards-db";
import lotsOfStuffBoard from "../../../../open-board-format/examples/lots_of_stuff.json";
import * as OBF from "../../../../open-board-format/obf";
import { Board } from "./Board";

const board = mapOBFToBoard(lotsOfStuffBoard as OBF.Board);

const meta = {
  title: "Design System/Board/Board",
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
    board,
  },
};
