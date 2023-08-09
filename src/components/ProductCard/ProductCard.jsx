/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Heart } from "../../icons/Heart";
import { Share22 } from "../../icons/Share22";
import { StarSolid } from "../../icons/StarSolid";
import { Action } from "../Action";
import { Image } from "../Image";
import { StyleFilledWrapper } from "../StyleFilledWrapper";
import "./style.css";

export const ProductCard = ({
  className,
  imageIconWrapperIcon = <Share22 className="icon-instance-node-2" color="#2B2B2B" />,
  override = <Heart className="icon-instance-node-2" />,
}) => {
  return (
    <div className={`product-card ${className}`}>
      <Image
        className="image-instance"
        frameClassName="image-3"
        iconWrapperIcon={imageIconWrapperIcon}
        imagePlaceholderImagePlaceholderClassName="design-component-instance-node"
        override={override}
        property1="default"
        styleFilledWrapperStyleFilledClassName="image-2"
      />
      <div className="body">
        <div className="l-text-3">
          <p className="title">Blackmores Brain Active Reduces Stress, Increases Memory Memory Tablets (30 Capsules)</p>
          <div className="text-wrapper-3">Subtitle</div>
          <div className="ratings-container">
            <div className="stars">
              <StarSolid className="star-solid-10" color="#E7B008" />
              <StarSolid className="star-solid-10" color="#E7B008" />
              <StarSolid className="star-solid-10" color="#E7B008" />
              <StarSolid className="star-solid-10" color="#E7B008" />
              <StarSolid className="star-solid-10" color="#E7B008" />
              <div className="text-wrapper-4">5.0</div>
            </div>
            <div className="total-ratings">
              <div className="text-wrapper-4">29k Ratings</div>
            </div>
          </div>
          <div className="frame-7" />
        </div>
      </div>
      <div className="tag-container">
        <StyleFilledWrapper
          className="tag-3"
          style="filledgreytext"
          tagCButtonTextClassName="tag-5"
          tagLeadingIcon={false}
          tagTagClassName="tag-4"
          tagText="MEDICINE"
          tagTrailingIcon={false}
        />
        <StyleFilledWrapper
          className="tag-3"
          style="filledgreytext"
          tagCButtonTextClassName="tag-5"
          tagLeadingIcon={false}
          tagTagClassName="tag-4"
          tagText="VITAMINS"
          tagTrailingIcon={false}
        />
        <StyleFilledWrapper
          className="tag-3"
          style="filledgreytext"
          tagCButtonTextClassName="tag-5"
          tagLeadingIcon={false}
          tagTagClassName="tag-4"
          tagText="BRAIN"
          tagTrailingIcon={false}
        />
      </div>
      <Action
        buttonSmallCButtonTextClassName="action-2"
        buttonSmallLabel="View Details"
        buttonSmallType="outline"
        className="action-instance"
        currency="RM"
        direction="horizontal"
        hasSecondaryButton={false}
        items="price-button"
        value="00.0"
      />
    </div>
  );
};
