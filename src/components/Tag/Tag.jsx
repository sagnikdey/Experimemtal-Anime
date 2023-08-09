/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight14 } from "../../icons/ArrowRight14";
import { IconWrapper } from "../IconWrapper";
import "./style.css";

export const Tag = ({
  trailingIcon = true,
  leadingIcon = true,
  text = "Subscribe",
  className,
  cButtonTextClassName,
  iconWrapperIcon = <ArrowLeft4 className="icon-instance-node" color="#E76F51" />,
  override = <ArrowRight14 className="icon-instance-node" color="#E76F51" />,
}) => {
  return (
    <div className={`tag ${className}`}>
      {leadingIcon && <IconWrapper className="icon-wrapper-instance" icon={iconWrapperIcon} size="x-small" />}

      <div className={`c-button-text ${cButtonTextClassName}`}>{text}</div>
      {trailingIcon && <IconWrapper className="icon-wrapper-instance" icon={override} size="x-small" />}
    </div>
  );
};

Tag.propTypes = {
  trailingIcon: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  text: PropTypes.string,
};
