/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const StarSolid = ({ color = "#E7B008", className }) => {
  return (
    <svg
      className={`star-solid ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M9.04893 3.92707C9.34828 3.00576 10.6517 3.00576 10.951 3.92707L12.0206 7.21886C12.1545 7.63089 12.5384 7.90985 12.9717 7.90985H16.4329C17.4016 7.90985 17.8044 9.14946 17.0207 9.71886L14.2205 11.7533C13.87 12.0079 13.7233 12.4593 13.8572 12.8713L14.9268 16.1631C15.2261 17.0844 14.1717 17.8506 13.3879 17.2812L10.5878 15.2467C10.2373 14.9921 9.76269 14.9921 9.4122 15.2467L6.61203 17.2812C5.82832 17.8506 4.77384 17.0844 5.07319 16.1631L6.14276 12.8713C6.27663 12.4593 6.12997 12.0079 5.77949 11.7533L2.97932 9.71886C2.1956 9.14946 2.59838 7.90985 3.5671 7.90985H7.0283C7.46153 7.90985 7.84548 7.63089 7.97936 7.21886L9.04893 3.92707Z"
        fill={color}
      />
    </svg>
  );
};

StarSolid.propTypes = {
  color: PropTypes.string,
};
