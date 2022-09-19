import { CheckIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import React from "react";

function BtnCopyy() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2 px-3 text-xs font-medium text-gray-600 bg-gray-50 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-600 dark:hover:text-white"
    >
      <ClipboardDocumentIcon className="w-4 h-4" />
      Copy
    </button>
  );
}
function BtnCopiedd() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 py-2 px-3 text-xs font-medium text-gray-600 bg-gray-50 border-l border-gray-200 dark:border-gray-600 dark:text-gray-400 dark:bg-gray-800 hover:text-blue-600 dark:hover:text-white"
    >
      <CheckIcon className="w-4 h-4" />
      Copied
    </button>
  );
}

export { BtnCopyy, BtnCopiedd };
