import type { Meta, StoryObj } from "@storybook/react";
import * as OBF from "../../../../open-board-format/obf";
import { BoardButton } from "../BoardButton/BoardButton";
import { Grid } from "./Grid";

const meta = {
  title: "Design System/Board/Grid",
  component: Grid<OBF.Button>,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

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
    columns: 3,
    rows: 3,
    items: [
      { id: "1", label: "One" },
      { id: "2", label: "Two" },
      { id: "3", label: "Three" },
      { id: "4", label: "Four" },
      { id: "5", label: "Five" },
      { id: "6", label: "Six" },
      { id: "7", label: "Seven" },
      { id: "8", label: "Eight" },
      { id: "9", label: "Nine" },
    ],
    renderItem: (item) => (
      <BoardButton style={{ width: "100%", height: "100%" }}>
        {item.label}
      </BoardButton>
    ),
  },
};
