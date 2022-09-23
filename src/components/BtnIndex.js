import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const BtnIndex = ({ reference, label }) => {
  const handleClick = () => {
    window.scrollTo({
      top: reference.current.offsetTop - 24,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={handleClick}>
      <ArrowLongRightIcon />
      {label}
    </div>
  );
};

export default BtnIndex;
