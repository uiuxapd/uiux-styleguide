import React from "react";

const TooltipsComponent = () => {
  return (
    <>
    <div className="flex flex-col gap-4 lg:hidden">
      <div className="group relative inline-block">
        <div className="rounded-lg bg-neutral-900 dark:bg-neutral-200 py-2 px-4 text-xs font-medium text-white dark:text-neutral-900 after:absolute after:-bottom-1 after:left-1/2 after:-z-10 after:h-6 after:w-6 after:-translate-x-1/2 after:rotate-45 after:rounded after:bg-neutral-900 after:dark:bg-neutral-200">
          Tooltip Text
        </div>
      </div>

      <div className="group relative inline-block">
        <div className="rounded-lg bg-neutral-900 dark:bg-neutral-200 py-2 px-4 text-xs font-medium text-white dark:text-neutral-900 after:absolute after:-right-1 after:top-1/2 after:-z-10 after:h-6 after:w-6 after:-translate-y-1/2 after:rotate-45 after:rounded after:bg-neutral-900 after:dark:bg-neutral-200">
          Tooltip Text
        </div>
      </div>
      <div className="group relative inline-block">
        <div className="rounded-lg bg-neutral-900 dark:bg-neutral-200 py-2 px-4 text-xs font-medium text-white dark:text-neutral-900 after:absolute after:-left-1 after:top-1/2 after:-z-10 after:h-6 after:w-6 after:-translate-y-1/2 after:rotate-45 after:rounded after:bg-neutral-900 after:dark:bg-neutral-200">
          Tooltip Text
        </div>
      </div>
      <div className="group relative inline-block">
        <div className="rounded-lg bg-neutral-900 dark:bg-neutral-200 py-2 px-4 text-xs font-medium text-white dark:text-neutral-900 after:absolute after:-top-1 after:left-1/2 after:-z-10 after:h-6 after:w-6 after:-translate-x-1/2 after:rotate-45 after:rounded after:bg-neutral-900 after:dark:bg-neutral-200">
          Tooltip Text
        </div>
      </div>
      </div>

      <div className="hidden lg:flex xl:flex-row xl:w-full xl:justify-evenly">
      <div className="group relative inline-block">
        <button className="btn-primary medium hidden md:flex">Tooltip on top</button>
        <div className="tooltip-top">
          Tooltip Text
        </div>
      </div>

      <div className="group relative inline-block">
        <button className="btn-primary medium hidden md:flex">Tooltip on left</button>
        <div className="tooltip-left">
          Tooltip Text
        </div>
      </div>
      <div className="group relative inline-block">
        <button className="btn-primary medium hidden md:flex">Tooltip on right</button>
        <div className="tooltip-right">
          Tooltip Text
        </div>
      </div>
      <div className="group relative inline-block">
        <button className="btn-primary medium hidden md:flex">Tooltip on bottom</button>
        <div className="tooltip-bottom">
          Tooltip Text
        </div>
      </div>
      </div>
    </>
  );
};

export default TooltipsComponent;
