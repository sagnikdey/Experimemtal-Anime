/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowLeft4 = ({ color = "#2B2B2B", className }) => {
  return (
    <svg
      className={`arrow-left-4 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M8.4714 2.86193C8.73175 3.12228 8.73175 3.54439 8.4714 3.80474L4.94281 7.33333H12.6667C13.0349 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0349 8.66667 12.6667 8.66667H4.94281L8.4714 12.1953C8.73175 12.4556 8.73175 12.8777 8.4714 13.1381C8.21106 13.3984 7.78894 13.3984 7.5286 13.1381L2.86193 8.47141C2.60158 8.21106 2.60158 7.78895 2.86193 7.5286L7.5286 2.86193C7.78894 2.60158 8.21106 2.60158 8.4714 2.86193Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

ArrowLeft4.propTypes = {
  color: PropTypes.string,
};
