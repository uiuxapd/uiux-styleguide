import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import stepMini from "./StepCodeSnippet";

const StepWizzardCopy = () => {
    const [isStepWizzardCopied, setWizzardCopy] = useState(false);
    const onCopyWizzard = () => {
      setWizzardCopy(true);
      setTimeout(() => {
        setWizzardCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={stepMini} onCopy={onCopyWizzard}>
        <div className="hidden sm:flex items-center">
          {isStepWizzardCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

  export default StepWizzardCopy;