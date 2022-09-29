import { React, useState } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

export const DefaultProgressBar = (props) => {
  const { percentage, type, className, ...otherProps } = props;
  return (
    <div
      {...otherProps}
      className={`${className} w-full h-3 rounded-full overflow-hidden bg-primary-border`}
    >
      <div
        className="h-full rounded-full bg-primary-main"
        style={{
          width: `${percentage}%`,
          transition: "width 0.2s ease-in-out",
        }}
      />
    </div>
  );
};

export const ProgressBarWithText = () => {
  const [progress, setProgress] = useState(10);
  const handleProgress = () => {
    const frequency = (1 * 1000) / 100;
    let defaultState = 20;
    const interval = setInterval(() => {
      if (defaultState >= 100) clearInterval(interval);
      setProgress(defaultState);
      defaultState++;
    }, frequency);
  };
  return (
    <>
      <div className="flex w-full justify-end">
        <div class="group relative inline-block">
          <button
            className="p-2 rounded-lg focus:ring-4 focus:ring-neutral-200 text-neutral-700"
            onClick={handleProgress}
          >
            <PlayIcon className="icon24" />
          </button>
          <div class="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900 py-2 px-4 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all delay-200">
            <span class="absolute -bottom-1 left-1/2 -z-10 h-5 w-5 -translate-x-1/2 rotate-45 rounded bg-neutral-900"></span>
            Click me baby
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
      <div className="flex justify-between">
        <span className="font-medium text-primary-main dark:text-white">
          Uploading <span className="animate-pulse">...</span>
        </span>
        <span className="font-medium text-primary-main dark:text-white">
          {progress}%
        </span>
      </div>
      <div className="bg-primary-border h-3 rounded-full">
        <div
          className="bg-primary-main h-3 w-1/5 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      </div>
    </>
  );
};
