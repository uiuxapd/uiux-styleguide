import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { defaultProgressBar, progressWithText } from "./ProgressCodeSnippets";

export const ProgressDefaultCopy = () => {
  const [isProgressDefaultCopied, setProgressDefaultCopy] = useState(false);
  const onCopyProgressDefault = () => {
    setProgressDefaultCopy(true);
    setTimeout(() => {
      setProgressDefaultCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={defaultProgressBar} onCopy={onCopyProgressDefault}>
      <div className="hidden md:flex items-center">
        {isProgressDefaultCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const ProgressWithTextCopy = () => {
  const [isProgressWithTextCopied, setProgressWithTextCopy] = useState(false);
  const onCopyProgressWithText = () => {
    setProgressWithTextCopy(true);
    setTimeout(() => {
      setProgressWithTextCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={progressWithText} onCopy={onCopyProgressWithText}>
      <div className="hidden md:flex items-center">
        {isProgressWithTextCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};
