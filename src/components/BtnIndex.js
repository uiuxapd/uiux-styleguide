import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const BtnIndex = ({ reference, label }) => {
  const handleClick = (e) => {
    // Scroll To
    window.scrollTo({
      top: reference.current.offsetTop - 24,
      behavior: "smooth",
    });

    // Add or Remove Class
    const siblings = (elem) => {
      let siblings = [];

      if (!elem.parentNode) {
        return siblings;
      }

      let sibling = elem.parentNode.firstElementChild;

      do {
        if (sibling !== elem) {
          siblings.push(sibling);
        }
      } while ((sibling = sibling.nextElementSibling));

      return siblings;
    };

    const allBtnIndex = siblings(e.target.parentNode);
    allBtnIndex.forEach((item) => {
      item.children[0].classList.remove("text-primary-main");
      item.children[0].classList.remove("dark:text-secondary-main");
    });

    e.target.classList.add("text-primary-main");
    e.target.classList.add("dark:text-secondary-main");
  };

  return (
    <div onClick={handleClick} className="text-neutral-600 dark:text-neutral-400">
      <ArrowLongRightIcon />
      {label}
    </div>
  );
};

export default BtnIndex;
