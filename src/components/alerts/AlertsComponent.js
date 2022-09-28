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
        <span className="flex-none flex-grow">This is Information Alert!</span>
        <XMarkIcon className="icon20" />
      </div>
      <div className="flex items-center gap-2 text-sm bg-secondary-surface border border-secondary-border text-secondary-pressed py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <ExclamationCircleIcon className="icon20" />
        <span className="flex-none flex-grow">This is Warning Alert!</span>
        <XMarkIcon className="icon20" />
      </div>
      <div className="flex items-center gap-2 text-sm bg-success-surface border border-success-border text-success-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <CheckCircleIcon className="icon20" />
        <span className="flex-none flex-grow">This is Success Alert!</span>
        <XMarkIcon className="icon20" />
      </div>
      <div className="flex items-center gap-2 text-sm bg-error-surface border border-error-border text-error-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <XCircleIcon className="icon20" />
        <span className="flex-none flex-grow">This is Error Alert!</span>
        <XMarkIcon className="icon20" />
      </div>
    </>
  );
};

export const AlertWithDescription = () => {
  return (
    <>
      <div className="flex items-center gap-4 text-sm bg-primary-surface border border-primary-border text-primary-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <div className="bg-primary-main w-2 h-2 rounded-full flex-none"></div>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Information Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <XMarkIcon className="icon20 flex-none" />
      </div>
      <div className="flex items-center gap-4 text-sm bg-secondary-surface border border-secondary-border text-secondary-pressed py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <div className="bg-secondary-pressed w-2 h-2 rounded-full flex-none"></div>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Warning Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <XMarkIcon className="icon20 flex-none" />
      </div>
      <div className="flex items-center gap-4 text-sm bg-success-surface border border-success-border text-success-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <div className="bg-success-main w-2 h-2 rounded-full flex-none"></div>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Success Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <XMarkIcon className="icon20 flex-none" />
      </div>
      <div className="flex items-center gap-4 text-sm bg-error-surface border border-error-border text-error-main py-2 pl-3 pr-4 rounded-lg w-full sm:w-96">
        <div className="bg-error-main w-2 h-2 rounded-full flex-none"></div>
        <div className="flex flex-col gap-1 flex-grow">
          <span className="font-medium">This is Information Alert!</span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisi elit. Odio, omnis?
          </span>
        </div>
        <XMarkIcon className="icon20 flex-none" />
      </div>
    </>
  );
};
