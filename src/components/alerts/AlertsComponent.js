import React from "react";
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export const DefaultAlert = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-sm bg-primary-surface border border-primary-border text-primary-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <InformationCircleIcon className="icon20" />
        <span className="flex-grow">This is Information Alert!</span>
        <a href="#/alerts" className="hover:bg-primary-border">
          <XMarkIcon className="icon20" />
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm bg-secondary-surface border border-secondary-border text-secondary-pressed py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <ExclamationCircleIcon className="icon20" />
        <span className="flex-grow">This is Warning Alert!</span>
        <a href="#/alerts" className="hover:bg-secondary-border">
          <XMarkIcon className="icon20" />
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm bg-success-surface border border-success-border text-success-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <CheckCircleIcon className="icon20" />
        <span className="flex-grow">This is Success Alert!</span>
        <a href="#/alerts" className="hover:bg-success-border">
          <XMarkIcon className="icon20" />
        </a>
      </div>
      <div className="flex items-center gap-2 text-sm bg-error-surface border border-error-border text-error-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <XCircleIcon className="icon20" />
        <span className="flex-grow">This is Error Alert!</span>
        <a href="#/alerts" className="hover:bg-error-border">
          <XMarkIcon className="icon20" />
        </a>
      </div>
    </>
  );
};

export const AlertWithDescription = () => {
  return (
    <>
      <div className="flex items-center gap-4 text-sm bg-primary-surface border border-primary-border text-primary-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-primary-main before:w-2 before:h-2 before:rounded-full before:flex-none">
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Information Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <a href="#/alerts" className="hover:bg-primary-border flex-none">
          <XMarkIcon className="icon20" />
        </a>
      </div>
      <div className="flex items-center gap-4 text-sm bg-secondary-surface border border-secondary-border text-secondary-pressed py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-secondary-pressed before:w-2 before:h-2 before:rounded-full before:flex-none">
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Warning Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <a href="#/alerts" className="hover:bg-secondary-border flex-none">
          <XMarkIcon className="icon20" />
        </a>
      </div>
      <div className="flex items-center gap-4 text-sm bg-success-surface border border-success-border text-success-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-success-main before:w-2 before:h-2 before:rounded-full before:flex-none">
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Success Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <a href="#/alerts" className="hover:bg-success-border flex-none">
          <XMarkIcon className="icon20" />
        </a>
      </div>
      <div className="flex items-center gap-4 text-sm bg-error-surface border border-error-border text-error-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96 before:bg-error-main before:w-2 before:h-2 before:rounded-full before:flex-none">
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Information Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <a href="#/alerts" className="hover:bg-error-border flex-none">
          <XMarkIcon className="icon20" />
        </a>
      </div>
    </>
  );
};
