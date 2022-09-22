import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const BtnPrimary = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-primary small">Button Title</button>
        <button className="btn-primary medium">Button Title</button>
        <button className="btn-primary large">Button Title</button>
      </div>
    </div>
  );
};

const BtnSecondary = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-secondary small">Button Title</button>
        <button className="btn-secondary medium">Button Title</button>
        <button className="btn-secondary large">Button Title</button>
      </div>
    </div>
  );
};

const BtnOutlined = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-outlined small">Button Title</button>
        <button className="btn-outlined medium">Button Title</button>
        <button className="btn-outlined large">Button Title</button>
      </div>
    </div>
  );
};

const BtnError = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-error small">Button Title</button>
        <button className="btn-error medium">Button Title</button>
        <button className="btn-error large">Button Title</button>
      </div>
    </div>
  );
};

const BtnText = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-text small">Button Title</button>
        <button className="btn-text medium">Button Title</button>
        <button className="btn-text large">Button Title</button>
      </div>
    </div>
  );
};

const BtnLeadIcon = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-primary small flex items-center gap-2">
          <BeakerIcon className="icon16" /> Button Title
        </button>
        <button className="btn-primary medium flex items-center gap-2">
          <BeakerIcon className="icon20" />
          Button Title
        </button>
        <button className="btn-primary large flex items-center gap-2">
          <BeakerIcon className="icon20" />
          Button Title
        </button>
      </div>
    </div>
  );
};

const BtnTrailIcon = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-primary small flex items-center gap-2">
          Button Title <BeakerIcon className="icon16" />
        </button>
        <button className="btn-primary medium flex items-center gap-2">
          Button Title <BeakerIcon className="icon20" />
        </button>
        <button className="btn-primary large flex items-center gap-2">
          Button Title
          <BeakerIcon className="icon20" />
        </button>
      </div>
    </div>
  );
};

const BtnDisable = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-disable medium">Button Title</button>
        <button className="btn-disable medium flex items-center gap-2">
          <BeakerIcon className="icon20" /> Button Title
        </button>
      </div>
    </div>
  );
};

const BtnFullRounded = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-primary small rounded-full">Button Title</button>
        <button className="btn-primary medium rounded-full">
          Button Title
        </button>
        <button className="btn-primary large rounded-full">Button Title</button>
      </div>
    </div>
  );
};

const BtnIconOnly = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-primary p-2">
          <BeakerIcon className="icon20" />
        </button>
        <button className="btn-primary p-2.5">
          <BeakerIcon className="icon20" />
        </button>
        <button className="btn-primary p-2.5">
          <BeakerIcon className="icon24" />
        </button>
      </div>
    </div>
  );
};

const BtnIconOnlyRounded = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-primary p-2 rounded-full">
          <BeakerIcon className="icon20" />
        </button>
        <button className="btn-primary p-2.5 rounded-full">
          <BeakerIcon className="icon20" />
        </button>
        <button className="btn-primary p-2.5 rounded-full">
          <BeakerIcon className="icon24" />
        </button>
      </div>
    </div>
  );
};

export {
  BtnPrimary,
  BtnSecondary,
  BtnOutlined,
  BtnError,
  BtnText,
  BtnLeadIcon,
  BtnTrailIcon,
  BtnDisable,
  BtnFullRounded,
  BtnIconOnly,
  BtnIconOnlyRounded,
};
