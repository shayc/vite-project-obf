import { Button } from "@fluentui/react-components";
import { SettingsFilled } from "@fluentui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { AppBar } from "./AppBar";

const meta = {
  title: "Design System/App/AppBar",
  component: AppBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: "640px" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    title: "Open Board",
    actions: (
      <>
        <Button
          title={"Settings"}
          aria-label={"Settings"}
          appearance="subtle"
          icon={<SettingsFilled />}
          onClick={() => console.log("Settings clicked")}
        />
      </>
    ),
  },
};
