/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ChevronLeft = ({ className }) => {
  return (
    <svg
      className={`chevron-left ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M15.7071 5.79289C16.0976 6.18342 16.0976 6.81658 15.7071 7.20711L10.4142 12.5L15.7071 17.7929C16.0976 18.1834 16.0976 18.8166 15.7071 19.2071C15.3166 19.5976 14.6834 19.5976 14.2929 19.2071L8.29289 13.2071C7.90237 12.8166 7.90237 12.1834 8.29289 11.7929L14.2929 5.79289C14.6834 5.40237 15.3166 5.40237 15.7071 5.79289Z"
        fill="#2B2B2B"
        fillRule="evenodd"
      />
    </svg>
  );
};
