import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { 
  stepMini,
  simpleStep,
  stepCircle,
  stepVertical,
 } from "./StepCodeSnippet";

const SimpleStepCopy = () => {
    const [isSimpleStepCopied, setSimpleCopy] = useState(false);
    const onCopySimple = () => {
      setSimpleCopy(true);
      setTimeout(() => {
        setSimpleCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={simpleStep} onCopy={onCopySimple}>
        <div className="hidden sm:flex items-center">
          {isSimpleStepCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

const StepMiniCopy = () => {
    const [isStepMiniCopied, setMiniCopy] = useState(false);
    const onCopyMini = () => {
      setMiniCopy(true);
      setTimeout(() => {
        setMiniCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={stepMini} onCopy={onCopyMini}>
        <div className="hidden sm:flex items-center">
          {isStepMiniCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

const StepCircleCopy = () => {
    const [isStepCircleCopied, setCircleCopy] = useState(false);
    const onCopyCircle = () => {
      setCircleCopy(true);
      setTimeout(() => {
        setCircleCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={stepCircle} onCopy={onCopyCircle}>
        <div className="hidden sm:flex items-center">
          {isStepCircleCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

const StepVerticalCopy = () => {
    const [isStepVerticalCopied, setVerticalCopy] = useState(false);
    const onCopyVertical = () => {
      setVerticalCopy(true);
      setTimeout(() => {
        setVerticalCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={stepVertical} onCopy={onCopyVertical}>
        <div className="hidden sm:flex items-center">
          {isStepVerticalCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

  export { SimpleStepCopy, StepMiniCopy, StepCircleCopy, StepVerticalCopy };