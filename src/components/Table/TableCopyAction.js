import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { 
  basicTable,
  scrollingTable,
 } from "./TableCodeSnippet";

const BasicTableCopy = () => {
    const [isBasicTableCopied, setBasicCopy] = useState(false);
    const onCopyBasic = () => {
      setBasicCopy(true);
      setTimeout(() => {
        setBasicCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={basicTable} onCopy={onCopyBasic}>
        <div className="hidden md:flex items-center">
          {isBasicTableCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

const ScrollingTableCopy = () => {
    const [isScrollingTableCopied, setScrollingCopy] = useState(false);
    const onCopyScrolling = () => {
      setScrollingCopy(true);
      setTimeout(() => {
        setScrollingCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={scrollingTable} onCopy={onCopyScrolling}>
        <div className="hidden md:flex items-center">
          {isScrollingTableCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

  export { BasicTableCopy, ScrollingTableCopy };