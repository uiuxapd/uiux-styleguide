import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { tooltipSnippets } from "./TooltipsCodeSnippets";

const TooltipsCopyAction = () => {
  const [isTooltipCopy, setTooltipCopy] = useState(false);
  const onCopyTooltip = () => {
    setTooltipCopy(true);
    setTimeout(() => {
      setTooltipCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={tooltipSnippets} onCopy={onCopyTooltip}>
      <div className="hidden md:flex items-center">
        {isTooltipCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export default TooltipsCopyAction;
