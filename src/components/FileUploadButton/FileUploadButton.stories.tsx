import type { Meta, StoryObj } from "@storybook/react";
import { FileUploadButton } from "./FileUploadButton";

const meta = {
  title: "Design System/Components/FileUploadButton",
  component: FileUploadButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FileUploadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
  args: {},
};
