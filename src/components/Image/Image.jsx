/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronLeft } from "../../icons/ChevronLeft";
import { Heart2 } from "../../icons/Heart2";
import { Share22 } from "../../icons/Share22";
import { Share23 } from "../../icons/Share23";
import { IconWrapper } from "../IconWrapper";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { ScrollBar } from "../ScrollBar";
import { StyleFilledWrapper } from "../StyleFilledWrapper";
import "./style.css";

export const Image = ({
  tag = true,
  icon = true,
  property1,
  className,
  imagePlaceholderImagePlaceholderClassName,
  styleFilledWrapperStyleFilledClassName,
  frameClassName,
  iconWrapperIcon = <Share22 className="instance-node-2" color="#FBFBFB" />,
  override = <Heart2 className="instance-node-2" color="#FBFBFB" />,
}) => {
  return (
    <div className={`image ${property1} ${className}`}>
      <ImagePlaceholder
        className={
          property1 === "default"
            ? imagePlaceholderImagePlaceholderClassName
            : {
                alignSelf: "stretch",
                borderRadius: "unset",
                flex: "1",
                flexGrow: "1",
                height: "unset",
                width: "100%",
              }
        }
      />
      {property1 === "default" && (
        <>
          <div className="frame">
            <ScrollBar className="scroll-bar-instance" />
          </div>
          <>
            {tag && (
              <StyleFilledWrapper
                className={styleFilledWrapperStyleFilledClassName}
                style="filled"
                tagCButtonTextClassName="tag-2"
                tagLeadingIcon={false}
                tagTagClassName="tag-instance"
                tagText="NEW FEATURE"
                tagTrailingIcon={false}
              />
            )}
          </>
          <div className={`frame-2 ${frameClassName}`}>
            <IconWrapper className="icon-wrapper-2" icon={iconWrapperIcon} size="small" />
            <IconWrapper className="icon-wrapper-2" icon={override} size="small" />
          </div>
        </>
      )}

      {property1 === "productpage" && (
        <div className="frame-3">
          <div className="frame-4">
            <IconWrapper className="icon-wrapper-2" icon={<ChevronLeft className="instance-node-2" />} size="small" />
          </div>
          <div className="frame-4">
            <IconWrapper className="icon-wrapper-2" icon={<Share23 className="instance-node-2" />} size="small" />
            <IconWrapper
              className="icon-wrapper-2"
              icon={<Heart2 className="instance-node-2" color="#2B2B2B" />}
              size="small"
            />
          </div>
        </div>
      )}
    </div>
  );
};

Image.propTypes = {
  tag: PropTypes.bool,
  icon: PropTypes.bool,
  property1: PropTypes.oneOf(["productpage", "default"]),
};
