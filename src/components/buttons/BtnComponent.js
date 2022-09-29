import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export const BtnPrimary = () => {
  return (
    <>
      <button className="btn-primary small">Button Title</button>
      <button className="btn-primary medium">Button Title</button>
      <button className="btn-primary large">Button Title</button>
    </>
  );
};

export const BtnSecondary = () => {
  return (
    <>
      <button className="btn-secondary small">Button Title</button>
      <button className="btn-secondary medium">Button Title</button>
      <button className="btn-secondary large">Button Title</button>
    </>
  );
};

export const BtnOutlined = () => {
  return (
    <>
      <button className="btn-outlined small">Button Title</button>
      <button className="btn-outlined medium">Button Title</button>
      <button className="btn-outlined large">Button Title</button>
    </>
  );
};

export const BtnError = () => {
  return (
    <>
      <button className="btn-error small">Button Title</button>
      <button className="btn-error medium">Button Title</button>
      <button className="btn-error large">Button Title</button>
    </>
  );
};

export const BtnText = () => {
  return (
    <>
      <button className="btn-text small">Button Title</button>
      <button className="btn-text medium">Button Title</button>
      <button className="btn-text large">Button Title</button>
    </>
  );
};

export const BtnLeadIcon = () => {
  return (
    <>
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
    </>
  );
};

export const BtnTrailIcon = () => {
  return (
    <>
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
    </>
  );
};

export const BtnDisable = () => {
  return (
    <>
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
    </>
  );
};

export const BtnFullRounded = () => {
  return (
    <>
      <button className="btn-primary small rounded-full">Button Title</button>
      <button className="btn-primary medium rounded-full">Button Title</button>
      <button className="btn-primary large rounded-full">Button Title</button>
    </>
  );
};

export const BtnIconOnly = () => {
  return (
    <>
      <button className="btn-primary p-2">
        <BeakerIcon className="icon20" />
      </button>
      <button className="btn-primary p-2.5">
        <BeakerIcon className="icon20" />
      </button>
      <button className="btn-primary p-2.5">
        <BeakerIcon className="icon24" />
      </button>
    </>
  );
};

export const BtnIconOnlyRounded = () => {
  return (
    <>
      <button className="btn-primary p-2 rounded-full">
        <BeakerIcon className="icon20" />
      </button>
      <button className="btn-primary p-2.5 rounded-full">
        <BeakerIcon className="icon20" />
      </button>
      <button className="btn-primary p-2.5 rounded-full">
        <BeakerIcon className="icon24" />
      </button>
    </>
  );
};
