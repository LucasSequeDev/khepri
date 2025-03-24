import type { Meta, StoryObj } from "@storybook/react";

import { NativeButton } from "./button";

const meta: Meta<typeof NativeButton> = {
  title: "Native/Atoms/Button",
  component: NativeButton,
};

export default meta;
type Story = StoryObj<typeof NativeButton>;

export const Default: Story = {
  args: {
    metadata: {
      children: "Click me!",
      style: {
        padding: "8px 16px",
        borderRadius: "4px",
      },
    },
  },
};
