import { React, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BtnCopied, BtnCopy } from "../BtnCond";
import { 
    formInput,
    formDatepicker,
    formSelect,
    formRadio,
    formCheckbox,
    formToggle,
    formTextarea
 } from "./FormCodeSnippet";

const FormInputCopy = () => {
    const [isInputFormCopied, setInputCopy] = useState(false);
    const onCopyInput = () => {
      setInputCopy(true);
      setTimeout(() => {
        setInputCopy(false);
      }, 1500);
    };
  
    return (
      <CopyToClipboard text={formInput} onCopy={onCopyInput}>
        <div className="hidden md:flex items-center">
          {isInputFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
      </CopyToClipboard>
    );
  };

const FormDateCopy = () => {
    const [isDateFormCopied, setDateCopy] = useState(false);
    const onCopyDate = () => {
        setDateCopy(true);
        setTimeout(() => {
            setDateCopy(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={formDatepicker} onCopy={onCopyDate}>
        <div className="hidden md:flex items-center">
            {isDateFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
        </CopyToClipboard>
    );
};

const FormSelectCopy = () => {
    const [isSelectFormCopied, setSelectCopy] = useState(false);
    const onCopySelect = () => {
        setSelectCopy(true);
        setTimeout(() => {
            setSelectCopy(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={formSelect} onCopy={onCopySelect}>
        <div className="hidden md:flex items-center">
            {isSelectFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
        </CopyToClipboard>
    );
};

const FormRadioCopy = () => {
    const [isRadioFormCopied, setRadioCopy] = useState(false);
    const onCopyRadio = () => {
        setRadioCopy(true);
        setTimeout(() => {
            setRadioCopy(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={formRadio} onCopy={onCopyRadio}>
        <div className="hidden md:flex items-center">
            {isRadioFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
        </CopyToClipboard>
    );
};

const FormCheckboxCopy = () => {
    const [isCheckboxFormCopied, setCheckboxCopy] = useState(false);
    const onCopyCheckbox = () => {
        setCheckboxCopy(true);
        setTimeout(() => {
            setCheckboxCopy(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={formCheckbox} onCopy={onCopyCheckbox}>
        <div className="hidden md:flex items-center">
            {isCheckboxFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
        </CopyToClipboard>
    );
};

const FormToggleCopy = () => {
    const [isToggleFormCopied, setToggleCopy] = useState(false);
    const onCopyToggle = () => {
        setToggleCopy(true);
        setTimeout(() => {
            setToggleCopy(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={formToggle} onCopy={onCopyToggle}>
        <div className="hidden md:flex items-center">
            {isToggleFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
        </CopyToClipboard>
    );
};

const FormTextareaCopy = () => {
    const [isTextareaFormCopied, setTextareaCopy] = useState(false);
    const onCopyTextarea = () => {
        setTextareaCopy(true);
        setTimeout(() => {
            setTextareaCopy(false);
        }, 1500);
    };

    return (
        <CopyToClipboard text={formTextarea} onCopy={onCopyTextarea}>
        <div className="hidden md:flex items-center">
            {isTextareaFormCopied ? <BtnCopied /> : <BtnCopy />}
        </div>
        </CopyToClipboard>
    );
};


export { FormInputCopy, FormDateCopy, FormSelectCopy, FormRadioCopy, FormCheckboxCopy, FormToggleCopy, FormTextareaCopy };