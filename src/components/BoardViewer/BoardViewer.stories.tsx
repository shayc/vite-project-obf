import type { Meta, StoryObj } from "@storybook/react";
import { BoardViewer } from "./BoardViewer";

const meta = {
  title: "Design System/Components/BoardViewer",
  component: BoardViewer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BoardViewer>;

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
    board: {
      id: "1",
      name: "Example Board",
      buttons: [
        {
          id: "1",
          label: "Button 1",
          backgroundColor: "rgb(255, 182, 193)",
          borderColor: "#000000",
        },
        {
          id: "2",
          label: "Button 2",
          backgroundColor: "rgb(173, 216, 230)",
          borderColor: "#000000",
        },
        {
          id: "3",
          label: "Button 3",
          backgroundColor: "#0000FF",
          borderColor: "#000000",
        },
        {
          id: "4",
          label: "Button 4",
          backgroundColor: "rgb(255, 255, 224)",
          borderColor: "#000000",
        },
        {
          id: "5",
          label: "Button 5",
          backgroundColor: "rgb(152, 251, 152)",
          borderColor: "#000000",
        },
        {
          id: "6",
          label: "Button 6",
          backgroundColor: "#FF00FF",
          borderColor: "#000000",
        },
        {
          id: "7",
          label: "Button 7",
          backgroundColor: "#FFFFFF",
          borderColor: "#000000",
        },
        {
          id: "8",
          label: "Button 8",
          backgroundColor: "#000000",
          borderColor: "#FFFFFF",
        },
        {
          id: "9",
          label: "Button 9",
          backgroundColor: "#FFFFFF",
          borderColor: "#000000",
        },
      ],
      grid: {
        rows: 3,
        columns: 3,
      },
    },
  },
};
