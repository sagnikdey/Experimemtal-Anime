/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowRight14 } from "../../icons/ArrowRight14";
import { Search3 } from "../../icons/Search3";
import { IconWrapper } from "../IconWrapper";
import "./style.css";

export const InputField = ({
  inputText = "giorgio@armani.com",
  trailingIcon = true,
  typingCaret = true,
  leadingIcon = true,
  state,
  className,
  iconWrapperIcon = <Search3 className="icon-instance-node-3" color="#2B2B2B" />,
  override = <ArrowRight14 className="icon-instance-node-3" color="#2B2B2B" />,
}) => {
  return (
    <div className={`input-field state-1-${state} ${className}`}>
      {leadingIcon && <IconWrapper className="icon-wrapper-5" icon={iconWrapperIcon} size="x-small" />}

      <div className="l-text-4">
        <div className="text">{inputText}</div>
        {typingCaret && <div className="caret" />}
      </div>
      {trailingIcon && <IconWrapper className="icon-wrapper-5" icon={override} size="x-small" />}
    </div>
  );
};

InputField.propTypes = {
  inputText: PropTypes.string,
  trailingIcon: PropTypes.bool,
  typingCaret: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
};
