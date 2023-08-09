import { Image } from ".";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    property1: {
      options: ["productpage", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    tag: true,
    icon: true,
    property1: "productpage",
    className: {},
    imagePlaceholderImagePlaceholderClassName: {},
    styleFilledWrapperStyleFilledClassName: {},
    frameClassName: {},
  },
};
