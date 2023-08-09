/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StopCircle2 } from "../../icons/StopCircle2";
import "./style.css";

export const IconWrapper = ({ size, className, icon = <StopCircle2 className="stop-circle" color="#2B2B2B" /> }) => {
  return <div className={`icon-wrapper ${className}`}>{icon}</div>;
};

IconWrapper.propTypes = {
  size: PropTypes.oneOf(["large", "x-small", "small", "x-large", "medium"]),
};
