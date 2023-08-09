/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Search3 = ({ color = "#2B2B2B", className }) => {
  return (
    <svg
      className={`search-3 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M2.66666 7.33333C2.66666 4.756 4.756 2.66666 7.33333 2.66666C9.91066 2.66666 12 4.756 12 7.33333C12 8.59068 11.5027 9.73189 10.6941 10.571C10.6714 10.5886 10.6495 10.6077 10.6286 10.6286C10.6077 10.6495 10.5886 10.6714 10.571 10.6941C9.73189 11.5027 8.59068 12 7.33333 12C4.756 12 2.66666 9.91066 2.66666 7.33333ZM11.0785 12.0213C10.052 12.8423 8.75 13.3333 7.33333 13.3333C4.01962 13.3333 1.33333 10.647 1.33333 7.33333C1.33333 4.01962 4.01962 1.33333 7.33333 1.33333C10.647 1.33333 13.3333 4.01962 13.3333 7.33333C13.3333 8.75 12.8423 10.052 12.0213 11.0785L14.4714 13.5286C14.7318 13.789 14.7318 14.2111 14.4714 14.4714C14.2111 14.7318 13.789 14.7318 13.5286 14.4714L11.0785 12.0213Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

Search3.propTypes = {
  color: PropTypes.string,
};
