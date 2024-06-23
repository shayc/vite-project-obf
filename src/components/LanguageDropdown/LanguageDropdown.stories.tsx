import type { Meta, StoryObj } from "@storybook/react";
import { LanguageDropdown } from "./LanguageDropdown";

const meta = {
  title: "Design System/Components/LanguageDropdown",
  component: LanguageDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LanguageDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [(Story) => <Story />],
  args: {},
};
