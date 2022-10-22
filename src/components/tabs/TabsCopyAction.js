import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { roundedTopTab, tabWithBackground, underlineTab } from "./TabsCodeSnippets";

export const TabWithBgCopy = () => {
  const [isTabWithBgCopy, setTabwitgBgCopy] = useState(false);
  const onCopyTabwitgBg = () => {
    setTabwitgBgCopy(true);
    setTimeout(() => {
      setTabwitgBgCopy(false);
    }, 1500);
  };
  return (
    <CopyToClipboard
      text={tabWithBackground}
      onCopy={onCopyTabwitgBg}
    >
      <div className="hidden md:flex items-center">
        {isTabWithBgCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const RoundedTopTabCopy = () => {
    const [isRoundedTopTabCopy, setRoundedTopTabCopy] = useState(false);
    const onCopyRoundedTopTab = () => {
      setRoundedTopTabCopy(true);
      setTimeout(() => {
        setRoundedTopTabCopy(false);
      }, 1500);
    };
    return (
      <CopyToClipboard
        text={roundedTopTab}
        onCopy={onCopyRoundedTopTab}
      >
        <div className="hidden md:flex items-center">
          {isRoundedTopTabCopy ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

  export const UnderlineTabCopy = () => {
    const [isUnderlineTabCopy, setUnderlineTabCopy] = useState(false);
    const onCopyUnderlineTab = () => {
      setUnderlineTabCopy(true);
      setTimeout(() => {
        setUnderlineTabCopy(false);
      }, 1500);
    };
    return (
      <CopyToClipboard
        text={underlineTab}
        onCopy={onCopyUnderlineTab}
      >
        <div className="hidden md:flex items-center">
          {isUnderlineTabCopy ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };