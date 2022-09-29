import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { alertDefault, alertWithDescription } from "./AlertCodeSnippets";

export const AlertDefaultCopy = () => {
  const [isAlertDefaultCopy, setAlertDefaultCopy] = useState(false);
  const onCopyAlertDefault = () => {
    setAlertDefaultCopy(true);
    setTimeout(() => {
      setAlertDefaultCopy(false);
    }, 1500);
  };
  return (
    <CopyToClipboard text={alertDefault} onCopy={onCopyAlertDefault}>
      <div className="hidden sm:flex items-center">
        {isAlertDefaultCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const AlertWithDescriptionCopy = () => {
  const [isAlertDescriptionCopy, setAlertDescriptiontCopy] = useState(false);
  const onCopyAlertDescription = () => {
    setAlertDescriptiontCopy(true);
    setTimeout(() => {
      setAlertDescriptiontCopy(false);
    }, 1500);
  };
  return (
    <CopyToClipboard
      text={alertWithDescription}
      onCopy={onCopyAlertDescription}
    >
      <div className="hidden sm:flex items-center">
        {isAlertDescriptionCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};
