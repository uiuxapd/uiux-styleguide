import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import {
  defaultBreadcrumbs,
  slashBreadcrumbs,
  solidBgBreadcrumbs,
} from "./BreadcrumbsCodeSnippets";

export const DefaultBreadcrumbsCopy = () => {
  const [isDefaultBreadcrumbsCopy, setDefaultBreadcrumbsCopy] = useState(false);
  const onCopyDefaultBreadcrumbs = () => {
    setDefaultBreadcrumbsCopy(true);
    setTimeout(() => {
      setDefaultBreadcrumbsCopy(false);
    }, 1500);
  };
  return (
    <CopyToClipboard
      text={defaultBreadcrumbs}
      onCopy={onCopyDefaultBreadcrumbs}
    >
      <div className="hidden md:flex items-center">
        {isDefaultBreadcrumbsCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const SlashBreadcrumbsCopy = () => {
  const [isSlashBreadcrumbsCopy, setSlashBreadcrumbsCopy] = useState(false);
  const onCopySlashBreadcrumbs = () => {
    setSlashBreadcrumbsCopy(true);
    setTimeout(() => {
      setSlashBreadcrumbsCopy(false);
    }, 1500);
  };
  return (
    <CopyToClipboard text={slashBreadcrumbs} onCopy={onCopySlashBreadcrumbs}>
      <div className="hidden md:flex items-center">
        {isSlashBreadcrumbsCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const SolidBgBreadcrumbsCopy = () => {
  const [isSolidBgBreadcrumbsCopy, setSolidBgBreadcrumbsCopy] = useState(false);
  const onCopySolidBgBreadcrumbs = () => {
    setSolidBgBreadcrumbsCopy(true);
    setTimeout(() => {
      setSolidBgBreadcrumbsCopy(false);
    }, 1500);
  };
  return (
    <CopyToClipboard
      text={solidBgBreadcrumbs}
      onCopy={onCopySolidBgBreadcrumbs}
    >
      <div className="hidden md:flex items-center">
        {isSolidBgBreadcrumbsCopy ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};
