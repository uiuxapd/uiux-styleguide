import {
  CheckIcon,
  ClipboardDocumentIcon,
  CodeBracketIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import React from "react";

function BtnCopy() {
  return (
    <button
      type="button"
      className="text-xs font-medium text-neutral-400 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-white"
    >
      <ClipboardDocumentIcon className="icon20" />
    </button>
  );
}
function BtnCopied() {
  return (
    <button
      type="button"
      className="text-xs font-medium text-neutral-600 dark:border-neutral-600 dark:text-neutral-400 hover:text-neutral-500 dark:hover:text-white"
    >
      <CheckIcon className="icon20" />
    </button>
  );
}

function TabPreviewActive() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium bg-white text-neutral-900 py-1.5 px-3 shadow rounded-md"
    >
      <EyeIcon className="icon20 text-primary-main" />
      <span className="hidden md:block">Preview</span>
    </button>
  );
}
function TabPreviewInactive() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium text-neutral-500 py-1.5 px-3 rounded-md"
    >
      <EyeIcon className="icon20" />
      <span className="hidden md:block">Preview</span>
    </button>
  );
}
function TabCodeActive() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium bg-white text-neutral-900 py-1.5 px-3 shadow rounded-md"
    >
      <CodeBracketIcon className="icon20 text-primary-main" />
      <span className="hidden md:block">Code</span>
    </button>
  );
}
function TabCodeInactive() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 text-sm font-medium text-neutral-500 py-1.5 px-3 rounded-md"
    >
      <CodeBracketIcon className="icon20" />
      <span className="hidden md:block">Code</span>
    </button>
  );
}

export {
  BtnCopy,
  BtnCopied,
  TabPreviewActive,
  TabPreviewInactive,
  TabCodeActive,
  TabCodeInactive,
};
