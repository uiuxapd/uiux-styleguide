import React, { useEffect } from "react";
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

    const allBtnIndex = siblings(e.target.parentNode)
    allBtnIndex.forEach((item) => {
      item.classList.remove("text-primary-main")
    })

    e.target.parentNode.classList.add("text-primary-main");
  };

  useEffect(() => {
    // window.onscroll = () => {
    //   window.scrollTo === reference.current.offsetTop ? console.log(true) : console.log(false)
    // }
  });

  return (
    <div onClick={handleClick}>
      <ArrowLongRightIcon />
      {label}
    </div>
  );
};

export default BtnIndex;
