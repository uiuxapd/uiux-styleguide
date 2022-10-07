import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { borderedAccordion, defaultAccordion } from "./AccordionCodeSnippets";

export const DefaultAccordionCopy = () => {
  const [isDefaultAccordion, setDefaultAccordionCopy] = useState(false);
  const onCopyDefaultAccordion = () => {
    setDefaultAccordionCopy(true);
    setTimeout(() => {
      setDefaultAccordionCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={defaultAccordion} onCopy={onCopyDefaultAccordion}>
      <div className="hidden md:flex items-center">
        {isDefaultAccordion ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BorderedAccordionCopy = () => {
  const [isBorderedAccordion, setBorderedAccordionCopy] = useState(false);
  const onCopyBorderedAccordion = () => {
    setBorderedAccordionCopy(true);
    setTimeout(() => {
      setBorderedAccordionCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={borderedAccordion} onCopy={onCopyBorderedAccordion}>
      <div className="hidden md:flex items-center">
        {isBorderedAccordion ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};
