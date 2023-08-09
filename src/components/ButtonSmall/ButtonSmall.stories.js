import { ButtonSmall } from ".";

export default {
  title: "Components/ButtonSmall",
  component: ButtonSmall,
  argTypes: {
    type: {
      options: ["fill", "outline", "ghost"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["default", "focused", "pressed", "hover", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Button",
    trailingIcon: true,
    leadingIcon: true,
    type: "fill",
    stateProp: "default",
    className: {},
    cButtonTextClassName: {},
  },
};
