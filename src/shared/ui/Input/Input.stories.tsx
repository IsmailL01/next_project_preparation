import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "shared/ui/Input",
  component: Input,
};
type Story = StoryObj<typeof Input>;

export const Normal: Story = {
  args: {},
};

export const CheckBox: Story = {
  args: {
    type: "checkbox",
  },
};

export default meta;
