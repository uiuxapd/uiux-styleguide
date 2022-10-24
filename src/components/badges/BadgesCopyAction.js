import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { defaultBadges } from "./BadgesCodeSnippets";

export const DefaultBadgesCopy = () => {
    const [isDefaultBadgesCopy, setDefaultBadgesCopy] = useState(false);
    const onCopyDefaultBadges = () => {
      setDefaultBadgesCopy(true);
      setTimeout(() => {
        setDefaultBadgesCopy(false);
      }, 1500);
    };
    return (
      <CopyToClipboard text={defaultBadges} onCopy={onCopyDefaultBadges}>
        <div className="hidden md:flex items-center">
          {isDefaultBadgesCopy ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };