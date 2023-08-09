/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Check1 } from "../../icons/Check1";
import { ChevronDown } from "../../icons/ChevronDown";
import { Info } from "../../icons/Info";
import { Search3 } from "../../icons/Search3";
import { StarSolid } from "../../icons/StarSolid";
import { ButtonSmall } from "../ButtonSmall";
import { IconWrapper } from "../IconWrapper";
import { InputField } from "../InputField";
import "./style.css";

export const Action = ({
  trend = true,
  tagline = "TAGLINE",
  title = "Jasper Doe",
  leadingAction = true,
  button1,
  label = true,
  button3 = true,
  icon3 = true,
  rating = "5.0",
  icon2 = true,
  subtitle = "@jasperdoe",
  value = "000",
  tagline1 = true,
  button2 = true,
  rating1 = true,
  caption = true,
  label1 = "00",
  icon = true,
  caption1 = "Caption ",
  buttons = true,
  subtitle1 = true,
  text = "More details...",
  title1 = true,
  currency = "RM",
  items,
  direction,
  className,
  hasSecondaryButton = true,
  buttonSmallLabel = "Button",
  buttonSmallType = "fill",
  buttonSmallCButtonTextClassName,
}) => {
  return (
    <div className={`action ${items} ${direction} ${className}`}>
      {((direction === "vertical" && items === "button-input") ||
        items === "button-x2-icon" ||
        items === "button-x2-toogle" ||
        items === "button-x2" ||
        items === "buttons-fill" ||
        items === "buttons-hug-icon" ||
        items === "buttons-hug-toggle") && (
        <>
          <div className="primary-button">
            {["button-input", "button-x2", "buttons-fill", "buttons-hug-toggle"].includes(items) && (
              <div className="c-button-text-3">
                {["button-x2", "buttons-fill"].includes(items) && <>Button</>}

                {items === "button-input" && (
                  <InputField
                    className="textfield-content"
                    iconWrapperIcon={<Search3 className="instance-node-4" color="#FBFBFB" />}
                    inputText="Url.example"
                    state="default"
                    trailingIcon={false}
                    typingCaret={false}
                  />
                )}

                {items === "buttons-hug-toggle" && (
                  <>
                    <div className="checkbox">
                      <IconWrapper
                        className="icon-wrapper-4"
                        icon={<Check1 className="instance-node-4" />}
                        size="x-small"
                      />
                    </div>
                    <div className="label">Don&#39;t ask me again</div>
                  </>
                )}
              </div>
            )}

            {["button-x2-icon", "button-x2-toogle"].includes(items) && (
              <>
                <div className="c-button-text-wrapper">
                  <div className="c-button-text-4">Button</div>
                </div>
                <div className="secondary-button">
                  <div className="c-button-text-5">Button</div>
                </div>
              </>
            )}

            {items === "buttons-hug-icon" && (
              <>
                <Info className="info-5" color="#FBFBFB" />
                <div className="more-details">{text}</div>
              </>
            )}
          </div>
          <div className="secondary-button-2">
            {["button-input", "button-x2-toogle", "button-x2", "buttons-fill"].includes(items) && (
              <div className="c-button-text-6">
                {["button-x2", "buttons-fill"].includes(items) && <>Button</>}

                {items === "button-x2-toogle" && (
                  <>
                    <div className="checkbox">
                      <IconWrapper
                        className="icon-wrapper-4"
                        icon={<Check1 className="instance-node-4" />}
                        size="x-small"
                      />
                    </div>
                    <div className="label">Don&#39;t ask me again</div>
                  </>
                )}

                {items === "button-input" && <>Send</>}
              </div>
            )}

            {items === "button-x2-icon" && (
              <>
                <Info className="info-5" color="#FBFBFB" />
                <div className="more-details">{text}</div>
              </>
            )}

            {["buttons-hug-icon", "buttons-hug-toggle"].includes(items) && (
              <>
                <div className="div-wrapper">
                  <div className="c-button-text-5">Button</div>
                </div>
                <div className="primary-button-2">
                  <div className="c-button-text-4">Button</div>
                </div>
              </>
            )}
          </div>
        </>
      )}

      {["button-x2-link", "button-x3"].includes(items) && (
        <div className="c-button-text-wrapper">
          <div className="c-button-text-4">Button</div>
        </div>
      )}

      {(items === "buttons-hug" ||
        items === "icon-x3" ||
        items === "link-x3" ||
        (direction === "horizontal" && items === "button-input")) && (
        <div className="container">
          {["button-input", "buttons-hug"].includes(items) && (
            <>
              <div className="input">
                <div className="input-content">
                  {items === "button-input" && (
                    <InputField
                      className="textfield-content"
                      iconWrapperIcon={<Search3 className="instance-node-4" color="#FBFBFB" />}
                      inputText="Url.example"
                      state="default"
                      trailingIcon={false}
                      typingCaret={false}
                    />
                  )}

                  {items === "buttons-hug" && <>Button</>}
                </div>
              </div>
              <div className="primary-button-3">
                <div className="c-button-text-4">
                  {items === "button-input" && <>Send</>}

                  {items === "buttons-hug" && <>Button</>}
                </div>
              </div>
            </>
          )}

          {items === "link-x3" && (
            <>
              <>
                {button2 && (
                  <ButtonSmall label="LINK" leadingIcon={false} stateProp="default" trailingIcon={false} type="ghost" />
                )}
              </>
              <>
                {button3 && (
                  <ButtonSmall label="LINK" leadingIcon={false} stateProp="default" trailingIcon={false} type="ghost" />
                )}
              </>
            </>
          )}

          {items === "icon-x3" && (
            <>
              <div className="icon-content">
                {icon && (
                  <IconWrapper
                    className="icon-wrapper-4"
                    icon={<Info className="info-5" color="#FBFBFB" />}
                    size="small"
                  />
                )}

                {label && <div className="label-2">{label1}</div>}
              </div>
              <>
                {icon2 && (
                  <div className="icon-content">
                    {icon && (
                      <IconWrapper
                        className="icon-wrapper-4"
                        icon={<Info className="info-5" color="#FBFBFB" />}
                        size="small"
                      />
                    )}

                    {label && <div className="label-2">{label1}</div>}
                  </div>
                )}
              </>
              <>
                {icon3 && (
                  <div className="icon-content">
                    {icon && (
                      <IconWrapper
                        className="icon-wrapper-4"
                        icon={<Info className="info-5" color="#FBFBFB" />}
                        size="small"
                      />
                    )}

                    {label && <div className="label-2">{label1}</div>}
                  </div>
                )}
              </>
            </>
          )}
        </div>
      )}

      {items === "buttons-title" && (
        <div className="l-text">
          {leadingAction && (
            <div className="div-2">
              <div className="avatar" />
            </div>
          )}

          <div className="l-text-2">
            {title1 && <div className="text-wrapper-2">{title}</div>}

            {subtitle1 && <div className="para">{subtitle}</div>}
          </div>
        </div>
      )}

      {items === "ratings-buttons" && (
        <>
          <>
            {rating1 && (
              <div className="rating">
                <div className="rating-right">
                  <div className="div-2">
                    <StarSolid className="star-solid" color="#E7B008" />
                    <StarSolid className="star-solid" color="#E7B008" />
                    <StarSolid className="star-solid" color="#E7B008" />
                    <StarSolid className="star-solid" color="#E7B008" />
                    <StarSolid className="star-solid" color="#E7B008" />
                  </div>
                  <div className="element">{rating}</div>
                </div>
                {caption && <div className="caption">{caption1}</div>}
              </div>
            )}
          </>
        </>
      )}

      {["buttons-title", "ratings-buttons"].includes(items) && (
        <>
          <>
            {buttons && (
              <div className="l-buttons">
                {items === "buttons-title" && (
                  <>
                    <>
                      {button2 && (
                        <ButtonSmall
                          cButtonTextClassName="button-small-2"
                          className="button-small-instance"
                          label="Read More"
                          leadingIcon={false}
                          stateProp="default"
                          trailingIcon={false}
                          type="outline"
                        />
                      )}
                    </>
                  </>
                )}

                {items === "ratings-buttons" && (
                  <>
                    <div className="div-wrapper">
                      <div className="c-button-text-5">Button</div>
                    </div>
                    <div className="primary-button-2">
                      <div className="c-button-text-4">Button</div>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        </>
      )}

      {items === "icon-text" && (
        <>
          <>
            {icon && (
              <IconWrapper className="icon-wrapper-4" icon={<Info className="info-5" color="#FBFBFB" />} size="small" />
            )}
          </>
          <>{label && <div className="label-2">{label1}</div>}</>
        </>
      )}

      {items === "chart-content" && (
        <div className="tagline">
          {tagline1 && <div className="TAGLINE">{tagline}</div>}

          {icon && (
            <IconWrapper className="icon-wrapper-4" icon={<Info className="info-5" color="#FBFBFB" />} size="small" />
          )}
        </div>
      )}

      {["button-x2-link", "button-x3", "chart-content"].includes(items) && (
        <>
          <>
            {hasSecondaryButton && (
              <div className="container-2">
                {items === "chart-content" && (
                  <>
                    <>
                      {trend && (
                        <div className="l-trend">
                          <Info className="info-5" color="#22C55E" />
                          <div className="more-details-2">{text}</div>
                        </div>
                      )}
                    </>
                  </>
                )}

                {["button-x2-link", "button-x3"].includes(items) && <div className="c-button-text-5">Button</div>}
              </div>
            )}
          </>
        </>
      )}

      {items === "chart-content" && (
        <>
          <>
            {caption && (
              <div className="caption-wrapper">
                <div className="caption-2">{caption1}</div>
              </div>
            )}
          </>
        </>
      )}

      {items === "price-button" && (
        <>
          <div className="frame-5">
            <div className="frame-6">
              <div className="RM">{currency}</div>
            </div>
            <div className="frame-6">
              <div className="element-2">{value}</div>
            </div>
            <div className="frame-6">
              <div className="text-wrapper-2">{value}</div>
            </div>
          </div>
          <>
            {hasSecondaryButton && (
              <InputField
                className="input-field-instance"
                inputText="1"
                leadingIcon={false}
                override={<ChevronDown className="instance-node-4" color="#FBFBFB" />}
                state="default"
                typingCaret={false}
              />
            )}
          </>
          <ButtonSmall
            cButtonTextClassName={buttonSmallCButtonTextClassName}
            className="primary-button-4"
            label={buttonSmallLabel}
            leadingIcon={false}
            stateProp="default"
            trailingIcon={false}
            type={buttonSmallType}
          />
        </>
      )}

      {["button-x2-link", "button-x3"].includes(items) && (
        <div className="tertiary-button">
          <div className="c-button-text-5">
            {items === "button-x3" && <>Button</>}

            {items === "button-x2-link" && <>Text Link</>}
          </div>
        </div>
      )}
    </div>
  );
};

Action.propTypes = {
  trend: PropTypes.bool,
  tagline: PropTypes.string,
  title: PropTypes.string,
  leadingAction: PropTypes.bool,
  button1: PropTypes.bool,
  label: PropTypes.bool,
  button3: PropTypes.bool,
  icon3: PropTypes.bool,
  rating: PropTypes.string,
  icon2: PropTypes.bool,
  subtitle: PropTypes.string,
  value: PropTypes.string,
  tagline1: PropTypes.bool,
  button2: PropTypes.bool,
  rating1: PropTypes.bool,
  caption: PropTypes.bool,
  label1: PropTypes.string,
  icon: PropTypes.bool,
  caption1: PropTypes.string,
  buttons: PropTypes.bool,
  subtitle1: PropTypes.bool,
  text: PropTypes.string,
  title1: PropTypes.bool,
  currency: PropTypes.string,
  items: PropTypes.oneOf([
    "chart-content",
    "buttons-title",
    "buttons-hug-toggle",
    "buttons-fill",
    "icon-x3",
    "button-input",
    "link-x3",
    "button-x3",
    "buttons-hug-icon",
    "button-x2-link",
    "button-x2",
    "icon-text",
    "ratings-buttons",
    "button-x2-icon",
    "price-button",
    "button-x2-toogle",
    "buttons-hug",
  ]),
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  hasSecondaryButton: PropTypes.bool,
  buttonSmallLabel: PropTypes.string,
  buttonSmallType: PropTypes.string,
};
