import { ClockIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";

export const DefaultBadges = () => {
  const baseStyle =
    "box-border rounded-lg border px-2 py-0.5 text-xs font-medium";

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <span
          className={`${baseStyle} border-primary-border bg-primary-surface text-primary-main`}
        >
          Default
        </span>
        <span
          class={`${baseStyle} border-secondary-border bg-secondary-surface text-secondary-pressed`}
        >
          Warning
        </span>
        <span
          class={`${baseStyle} border-error-border bg-error-surface text-error-main`}
        >
          Error
        </span>
        <span
          class={`${baseStyle} border-success-border bg-success-surface text-success-hover`}
        >
          Success
        </span>
        <span
          class={`${baseStyle}border-neutral-300 bg-neutral-100  text-neutral-600`}
        >
          Dark
        </span>
        <span
          class={`${baseStyle} border-transparent bg-primary-main text-white`}
        >
          Default
        </span>
        <span
          class={`${baseStyle} border-transparent bg-secondary-pressed text-white`}
        >
          Warning
        </span>
        <span
          class={`${baseStyle} border-transparent bg-error-main  text-white `}
        >
          Error
        </span>
        <span
          class={`${baseStyle} border-transparent bg-success-main text-white`}
        >
          Success
        </span>
        <span
          class={`${baseStyle} border-transparent bg-neutral-700 text-white`}
        >
          Dark
        </span>
      </div>
    </>
  );
};

export const BadgeWithIcon = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <span class="flex gap-1 items-center box-border rounded-lg border border-primary-border bg-primary-surface px-2 py-0.5 text-xs font-medium text-primary-main">
          <ClockIcon className="icon16" />3 weeks ago
        </span>
        <span class="flex gap-1 items-center box-border rounded-lg border border-transparent bg-primary-main px-2 py-0.5 text-xs font-medium text-white">
          <ClockIcon className="icon16" />3 weeks ago
        </span>
      </div>
    </>
  );
};

export const DismissableBadges = () => {
  const [closeBadge, setCloseBadge] = useState(true);
  const baseStyle =
    "flex gap-1 items-center box-border rounded-lg border px-2 py-0.5 text-xs font-medium";

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {closeBadge && (
          <span
            className={`${baseStyle} border-primary-border bg-primary-surface text-primary-main`}
          >
            Default
            <button
              className="hover:bg-primary-border"
              onClick={() => setCloseBadge(false)}
            >
              <XMarkIcon className="icon16" />
            </button>
          </span>
        )}
        <span
          class={`${baseStyle} border-secondary-border bg-secondary-surface text-secondary-pressed`}
        >
          Warning
          <button className="hover:bg-secondary-border">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-error-border bg-error-surface text-error-main`}
        >
          Error
          <button className="hover:bg-error-border">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-success-border bg-success-surface text-success-hover`}
        >
          Success
          <button className="hover:bg-success-border">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-neutral-300 bg-neutral-100 text-neutral-600`}
        >
          Dark
          <button className="hover:bg-neutral-300">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          className={`${baseStyle} border-transparent bg-primary-main text-white`}
        >
          Default
          <button className="hover:bg-primary-hover">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-transparent bg-secondary-pressed text-white`}
        >
          Warning
          <button className="hover:bg-secondary-hover">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-transparent bg-error-main text-white`}
        >
          Error
          <button className="hover:bg-error-hover">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-transparent bg-success-main text-white`}
        >
          Success
          <button className="hover:bg-success-hover">
            <XMarkIcon className="icon16" />
          </button>
        </span>
        <span
          class={`${baseStyle} border-transparent bg-neutral-700 text-white`}
        >
          Dark
          <button className="hover:bg-neutral-800">
            <XMarkIcon className="icon16" />
          </button>
        </span>
      </div>
    </>
  );
};
