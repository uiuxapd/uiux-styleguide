import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { simpleRange } from "./RangeCodeSnippet";

const SimpleRangeCopy = () => {
    const [isSimpleRangeCopied, setRangeCopy] = useState(false);
    const onCopyRange = () => {
      setRangeCopy(true);
      setTimeout(() => {
        setRangeCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={simpleRange} onCopy={onCopyRange}>
        <div className="hidden md:flex items-center">
          {isSimpleRangeCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

  export { SimpleRangeCopy };