import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { badgesWithIcon, defaultBadges, dismissableBadges, notificationBadges } from "./BadgesCodeSnippets";

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
  
export const BadgesWithIconCopy = () => {
    const [isBadgesWithIconCopy, setBadgesWithIconCopy] = useState(false);
    const onCopyBadgesWithIcon = () => {
      setBadgesWithIconCopy(true);
      setTimeout(() => {
        setBadgesWithIconCopy(false);
      }, 1500);
    };
    return (
      <CopyToClipboard text={badgesWithIcon} onCopy={onCopyBadgesWithIcon}>
        <div className="hidden md:flex items-center">
          {isBadgesWithIconCopy ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

export const DismissableBadgesCopy = () => {
    const [isDismissableBadgesCopy, setDismissableBadgesCopy] = useState(false);
    const onCopyDismissableBadges = () => {
      setDismissableBadgesCopy(true);
      setTimeout(() => {
        setDismissableBadgesCopy(false);
      }, 1500);
    };
    return (
      <CopyToClipboard text={dismissableBadges} onCopy={onCopyDismissableBadges}>
        <div className="hidden md:flex items-center">
          {isDismissableBadgesCopy ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };
  
export const NotificationBadgesCopy = () => {
    const [isNotificationBadgesCopy, setNotificationBadgesCopy] = useState(false);
    const onCopyNotificationBadges = () => {
      setNotificationBadgesCopy(true);
      setTimeout(() => {
        setNotificationBadgesCopy(false);
      }, 1500);
    };
    return (
      <CopyToClipboard text={notificationBadges} onCopy={onCopyNotificationBadges}>
        <div className="hidden md:flex items-center">
          {isNotificationBadgesCopy ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };