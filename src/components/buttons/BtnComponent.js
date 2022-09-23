import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export const BtnPrimary = () => {
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

export const BtnSecondary = () => {
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

export const BtnOutlined = () => {
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

export const BtnError = () => {
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

export const BtnText = () => {
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

export const BtnLeadIcon = () => {
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

export const BtnTrailIcon = () => {
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

export const BtnDisable = () => {
  return (
    <div className="component-section">
      <div className="component-block">
        <button className="btn-disable small">Button Title</button>
        <button className="btn-disable medium">Button Title</button>
        <button className="btn-disable large">Button Title</button>
        <button className="btn-disable large flex items-center gap-2">
          <BeakerIcon className="icon20" /> Button Title
        </button>
        <button className="btn-disable p-2.5">
          <BeakerIcon className="icon24" />
        </button>
        <button className="btn-disable p-2.5 rounded-full">
          <BeakerIcon className="icon24" />
        </button>
      </div>
    </div>
  );
};

export const BtnFullRounded = () => {
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

export const BtnIconOnly = () => {
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

export const BtnIconOnlyRounded = () => {
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
