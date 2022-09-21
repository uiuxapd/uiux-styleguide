import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import React from "react";

function BtnCopyy() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2 px-3 text-xs font-medium text-neutral-600 bg-neutral-50 border-l border-neutral-200 dark:border-neutral-600 dark:text-neutral-400 dark:bg-neutral-900 hover:text-blue-600 dark:hover:text-white"
    >
      <ClipboardDocumentIcon className="icon16" />
      Copy
    </button>
  );
}
function BtnCopiedd() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2 px-3 text-xs font-medium text-neutral-600 bg-neutral-50 border-l border-neutral-200 dark:border-neutral-600 dark:text-neutral-400 dark:bg-neutral-900 hover:text-blue-600 dark:hover:text-white"
    >
      <CheckIcon className="icon16" />
      Copied
    </button>
  );
}

export { BtnCopyy, BtnCopiedd };
