import type { Meta, StoryObj } from "@storybook/react";

import { nativeContactFormSchema } from "../../../../../src/native/examples/NativeContactFormSchema";
import { Submit } from "../../../../interface";
import { NativeContactForm } from "./contactForm";

const meta: Meta<typeof NativeContactForm> = {
  title: "Native/Moledules/ContactForm",
  component: NativeContactForm,
};

export default meta;
type Story = StoryObj<typeof NativeContactForm>;

const submit: Submit = async (data) => {
  alert(JSON.stringify(data, null, 2));
};

export const Default: Story = {
  args: {
    submit,
    schema: nativeContactFormSchema,
  },
};
