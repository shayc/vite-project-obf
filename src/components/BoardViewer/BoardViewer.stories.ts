import type { Meta, StoryObj } from "@storybook/react";
import { BoardViewer } from "./BoardViewer";

const meta = {
  title: "Design System/Components/Board",
  component: BoardViewer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoardViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "Board 1",
    buttons: [
      {
        id: "1",
        label: "Button 1",
        background_color: "#FF0000",
        border_color: "#000000",
      },
      {
        id: "2",
        label: "Button 2",
        background_color: "#00FF00",
        border_color: "#000000",
      },
      {
        id: "3",
        label: "Button 3",
        background_color: "#0000FF",
        border_color: "#000000",
      },
      {
        id: "4",
        label: "Button 4",
        background_color: "#FFFF00",
        border_color: "#000000",
      },
      {
        id: "5",
        label: "Button 5",
        background_color: "#00FFFF",
        border_color: "#000000",
      },
      {
        id: "6",
        label: "Button 6",
        background_color: "#FF00FF",
        border_color: "#000000",
      },
      {
        id: "7",
        label: "Button 7",
        background_color: "#FFFFFF",
        border_color: "#000000",
      },
      {
        id: "8",
        label: "Button 8",
        background_color: "#000000",
        border_color: "#FFFFFF",
      },
      {
        id: "9",
        label: "Button 9",
        background_color: "#FFFFFF",
        border_color: "#000000",
      },
    ],
    grid: {
      rows: 3,
      columns: 3,
    },
  },
};
