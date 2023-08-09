/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight14 } from "../../icons/ArrowRight14";
import { Tag } from "../Tag";
import "./style.css";

export const StyleFilledWrapper = ({
  style,
  className,
  tagTagClassName,
  tagText = "SUBSCRIBE",
  tagLeadingIcon,
  tagTrailingIcon,
  tagCButtonTextClassName,
}) => {
  return (
    <div className={`style-filled-wrapper ${className}`}>
      <Tag
        cButtonTextClassName={tagCButtonTextClassName}
        className={tagTagClassName}
        iconWrapperIcon={
          <ArrowLeft4
            className="instance-node"
            color={
              ["filled", "stroke"].includes(style) ? "#E76F51" : style === "filledgreytext" ? "#484848" : undefined
            }
          />
        }
        leadingIcon={tagLeadingIcon}
        override={
          <ArrowRight14
            className="instance-node"
            color={
              ["filled", "stroke"].includes(style) ? "#E76F51" : style === "filledgreytext" ? "#484848" : undefined
            }
          />
        }
        text={tagText}
        trailingIcon={tagTrailingIcon}
      />
    </div>
  );
};

StyleFilledWrapper.propTypes = {
  style: PropTypes.oneOf(["filled", "filledgreytext", "stroke"]),
  tagText: PropTypes.string,
  tagLeadingIcon: PropTypes.bool,
  tagTrailingIcon: PropTypes.bool,
};
