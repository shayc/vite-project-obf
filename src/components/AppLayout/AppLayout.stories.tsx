import type { Meta, StoryObj } from "@storybook/react";
import { AppLayout } from "./AppLayout";

const meta = {
  title: "Design System/App/AppLayout",
  component: AppLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLayout>;

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
    children: <>Children</>,
  },
};
