import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { React, useRef, useState, useEffect } from "react";

export const DefaultAccordion = ({ content, open, onToggle }) => {
  const [heightElement, setHeightElement] = useState();
  const { headerTitle, bodyContent } = content;

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightElement(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div
      className={`relative before:absolute before:top-0 before:bottom-0 before:left-0 before:w-1 before:bg-primary-main ${
        open ? "before:opacity-100" : "before:opacity-0"
      }`}
    >
      <button
        onClick={onToggle}
        className={`flex w-full bg-white px-4 py-3 hover:bg-primary-surface ${
          open ? "bg-primary-surface text-primary-main " : "text-neutral-700"
        }`}
      >
        <span className="flex flex-grow">{headerTitle}</span>
        <ChevronDownIcon
          className={`${open ? "transform rotate-180" : ""} icon20`}
        />
      </button>

      <div
        ref={refHeight}
        className="h-0 overflow-hidden transition-all "
        style={{ height: open ? `${heightElement}` : "0px" }}
      >
        <p className="flex flex-wrap bg-primary-surface px-4 pb-4 text-neutral-600 dark:text-neutral-600">
          {bodyContent}
        </p>
      </div>
    </div>
  );
};

export const BorderedAccordion = ({ content, open, onToggle }) => {
  const [heightElement, setHeightElement] = useState();
  const { headerTitle, bodyContent } = content;

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightElement(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div
      className={`box-border rounded-lg border border-primary-border overflow-hidden dark:border-none ${
        open ? "before:opacity-100 shadow" : "before:opacity-0"
      }`}
    >
      <button
        onClick={onToggle}
        className={`flex w-full px-4 py-3 bg-white hover:bg-primary-surface ${
          open
            ? "border-b text-primary-main border-primary-border"
            : "text-neutral-700"
        }`}
      >
        <span className="flex flex-grow">{headerTitle}</span>
        <ChevronDownIcon
          className={`${open ? "transform rotate-180" : ""} icon20`}
        />
      </button>

      <div
        ref={refHeight}
        className="h-0 overflow-hidden transition-all "
        style={{ height: open ? `${heightElement}` : "0px" }}
      >
        <p className="flex flex-wrap px-4 py-3 bg-white text-neutral-600 dark:text-neutral-600">
          {bodyContent}
        </p>
      </div>
    </div>
  );
};
