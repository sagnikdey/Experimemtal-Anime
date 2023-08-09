import { InputField } from ".";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    state: {
      options: ["disabled", "focused", "hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    inputText: "giorgio@armani.com",
    trailingIcon: true,
    typingCaret: true,
    leadingIcon: true,
    state: "disabled",
    className: {},
  },
};
