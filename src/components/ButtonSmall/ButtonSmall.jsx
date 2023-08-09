/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { ArrowLeft4 } from "../../icons/ArrowLeft4";
import { ArrowRight14 } from "../../icons/ArrowRight14";
import { IconWrapper } from "../IconWrapper";
import "./style.css";

export const ButtonSmall = ({
  label = "Button",
  trailingIcon = true,
  leadingIcon = true,
  type,
  stateProp,
  className,
  cButtonTextClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "fill",
    state: stateProp || "default",
  });

  return (
    <div
      className={`button-small state-${state.state} ${state.type} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {leadingIcon && (
        <IconWrapper
          className="icon-wrapper-3"
          icon={
            <ArrowLeft4
              className="instance-node-3"
              color={
                (state.state === "disabled" && state.type === "fill") ||
                (state.state === "focused" && state.type === "fill") ||
                (state.state === "hover" && state.type === "fill") ||
                (state.state === "pressed" && state.type === "fill")
                  ? "white"
                  : (state.state === "focused" && state.type === "ghost") ||
                    (state.state === "focused" && state.type === "outline") ||
                    (state.state === "pressed" && state.type === "ghost") ||
                    (state.state === "pressed" && state.type === "outline")
                  ? "#B95941"
                  : state.state === "default" && state.type === "fill"
                  ? "#FBFBFB"
                  : state.state === "default" && ["ghost", "outline"].includes(state.type)
                  ? "#E76F51"
                  : state.state === "disabled" && ["ghost", "outline"].includes(state.type)
                  ? "#D1D8E2"
                  : state.type === "outline" && state.state === "hover"
                  ? "#A24E39"
                  : state.type === "ghost" && state.state === "hover"
                  ? "#D06449"
                  : undefined
              }
            />
          }
          size="x-small"
        />
      )}

      {["default", "disabled", "hover", "pressed"].includes(state.state) && (
        <div className={`text-wrapper ${cButtonTextClassName}`}>{label}</div>
      )}

      {state.state === "focused" && (
        <>
          <div className="c-button-text-2">{label}</div>
          <div className="button-ring" />
        </>
      )}

      {trailingIcon && (
        <IconWrapper
          className="icon-wrapper-3"
          icon={
            <ArrowRight14
              className="instance-node-3"
              color={
                state.state === "default" && state.type === "fill"
                  ? "#FBFBFB"
                  : (state.state === "disabled" && state.type === "fill") ||
                    (state.state === "focused" && state.type === "fill") ||
                    (state.state === "hover" && state.type === "fill") ||
                    (state.state === "pressed" && state.type === "fill")
                  ? "white"
                  : state.state === "default" && ["ghost", "outline"].includes(state.type)
                  ? "#E76F51"
                  : (state.state === "focused" && state.type === "ghost") ||
                    (state.state === "focused" && state.type === "outline") ||
                    (state.state === "pressed" && state.type === "ghost") ||
                    (state.state === "pressed" && state.type === "outline")
                  ? "#B95941"
                  : state.state === "disabled" && ["ghost", "outline"].includes(state.type)
                  ? "#D1D8E2"
                  : state.type === "outline" && state.state === "hover"
                  ? "#A24E39"
                  : state.type === "ghost" && state.state === "hover"
                  ? "#D06449"
                  : undefined
              }
            />
          }
          size="x-small"
        />
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default" && state.type === "fill") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
          type: "fill",
        };
    }
  }

  if (state.state === "hover" && state.type === "fill") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
          type: "fill",
        };

      case "click":
        return {
          state: "pressed",
          type: "fill",
        };
    }
  }

  if (state.state === "default" && state.type === "outline") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
          type: "outline",
        };
    }
  }

  if (state.state === "hover" && state.type === "outline") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
          type: "outline",
        };

      case "click":
        return {
          state: "pressed",
          type: "outline",
        };
    }
  }

  if (state.state === "default" && state.type === "ghost") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
          type: "ghost",
        };
    }
  }

  if (state.state === "hover" && state.type === "ghost") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
          type: "ghost",
        };

      case "click":
        return {
          state: "pressed",
          type: "ghost",
        };
    }
  }

  return state;
}

ButtonSmall.propTypes = {
  label: PropTypes.string,
  trailingIcon: PropTypes.bool,
  leadingIcon: PropTypes.bool,
  type: PropTypes.oneOf(["fill", "outline", "ghost"]),
  stateProp: PropTypes.oneOf(["default", "focused", "pressed", "hover", "disabled"]),
};
