import type { Meta, StoryObj } from "@storybook/react";
import { AppSettings } from "./AppSettings";

const meta = {
  title: "Design System/App/AppSettings",
  component: AppSettings,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
  args: {},
};
