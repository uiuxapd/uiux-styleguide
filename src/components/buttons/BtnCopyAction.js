import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import {
  btnDisable,
  btnError,
  btnFullRounded,
  btnIconOnly,
  btnIconOnlyRounded,
  btnLeadIcon,
  btnOutlined,
  btnPrimary,
  btnSecondary,
  btnText,
  btnTrailIcon,
} from "./BtnCodeSnippets";

export const BtnPrimaryCopy = () => {
  const [isBtnPrimaryCopied, setPrimaryCopy] = useState(false);
  const onCopyPrimary = () => {
    setPrimaryCopy(true);
    setTimeout(() => {
      setPrimaryCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnPrimary} onCopy={onCopyPrimary}>
      <div className="hidden md:flex items-center">
        {isBtnPrimaryCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnSecondaryCopy = () => {
  const [isBtnSecondaryCopied, setSecondaryCopy] = useState(false);
  const onCopySecondary = () => {
    setSecondaryCopy(true);
    setTimeout(() => {
      setSecondaryCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnSecondary} onCopy={onCopySecondary}>
      <div className="hidden md:flex items-center">
        {isBtnSecondaryCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnOutlinedCopy = () => {
  const [isBtnOutlinedCopied, setOutlinedCopy] = useState(false);
  const onCopyOutlined = () => {
    setOutlinedCopy(true);
    setTimeout(() => {
      setOutlinedCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnOutlined} onCopy={onCopyOutlined}>
      <div className="hidden md:flex items-center">
        {isBtnOutlinedCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnErrorCopy = () => {
  const [isBtnErrorCopied, setErrorCopy] = useState(false);
  const onCopyError = () => {
    setErrorCopy(true);
    setTimeout(() => {
      setErrorCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnError} onCopy={onCopyError}>
      <div className="hidden md:flex items-center">
        {isBtnErrorCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnTextCopy = () => {
  const [isBtnTextCopied, setTextCopy] = useState(false);
  const onCopyText = () => {
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnText} onCopy={onCopyText}>
      <div className="hidden md:flex items-center">
        {isBtnTextCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnLeadIconCopy = () => {
  const [isBtnLeadIconCopied, setBtnLeadIconCopy] = useState(false);
  const onCopyBtnLeadIcon = () => {
    setBtnLeadIconCopy(true);
    setTimeout(() => {
      setBtnLeadIconCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnLeadIcon} onCopy={onCopyBtnLeadIcon}>
      <div className="hidden md:flex items-center">
        {isBtnLeadIconCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnTrailIconCopy = () => {
  const [isBtnTrailIconCopied, setBtnTrailIconCopy] = useState(false);
  const onCopyBtnTrailIcon = () => {
    setBtnTrailIconCopy(true);
    setTimeout(() => {
      setBtnTrailIconCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnTrailIcon} onCopy={onCopyBtnTrailIcon}>
      <div className="hidden md:flex items-center">
        {isBtnTrailIconCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnDisableCopy = () => {
  const [isBtnDisableCopied, setDisableCopy] = useState(false);
  const onCopyDisable = () => {
    setDisableCopy(true);
    setTimeout(() => {
      setDisableCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnDisable} onCopy={onCopyDisable}>
      <div className="hidden md:flex items-center">
        {isBtnDisableCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnRoundedCopy = () => {
  const [isBtnRoundedCopied, setBtnRoundedCopy] = useState(false);
  const onCopyBtnRounded = () => {
    setBtnRoundedCopy(true);
    setTimeout(() => {
      setBtnRoundedCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnFullRounded} onCopy={onCopyBtnRounded}>
      <div className="hidden md:flex items-center">
        {isBtnRoundedCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnIconOnlyCopy = () => {
  const [isBtnIconOnlyCopied, setBtnIconOnlyCopy] = useState(false);
  const onCopyBtnIconOnly = () => {
    setBtnIconOnlyCopy(true);
    setTimeout(() => {
      setBtnIconOnlyCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard text={btnIconOnly} onCopy={onCopyBtnIconOnly}>
      <div className="hidden md:flex items-center">
        {isBtnIconOnlyCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};

export const BtnIconOnlyRoundedCopy = () => {
  const [isBtnIconOnlyRoundedCopied, setBtnIconOnlyRoundedCopy] =
    useState(false);
  const onCopyBtnIconOnlyRounded = () => {
    setBtnIconOnlyRoundedCopy(true);
    setTimeout(() => {
      setBtnIconOnlyRoundedCopy(false);
    }, 1500);
  };

  return (
    <CopyToClipboard
      text={btnIconOnlyRounded}
      onCopy={onCopyBtnIconOnlyRounded}
    >
      <div className="hidden md:flex items-center">
        {isBtnIconOnlyRoundedCopied ? <BtnCopied /> : <BtnCopy />}
      </div>
    </CopyToClipboard>
  );
};
