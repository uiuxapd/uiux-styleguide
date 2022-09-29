import { Tab } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import { PlayIcon } from "@heroicons/react/24/solid";

const ProgressBar = () => {
  const [progress, setProgress] = useState(20);
  const handleProgress = () => {
    const frequency = (3 * 1000) / 100;
    let defaultState = 20;
    const interval = setInterval(() => {
      if (defaultState >= 100) clearInterval(interval);
      setProgress(defaultState);
      defaultState++;
    }, frequency);
  };
  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Progress Bar</h1>
          <p className="leading-relaxed dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit magnam minima. Beatae deserunt perferendis aut ipsum
            labore, nihil laborum sint, vitae aspernatur dolor quibusdam velit
            fugit dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
            necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
            recusandae architecto. Veniam, fuga nam?
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Default Progress Bar Start */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Default Progress Bar
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? (
                            <TabPreviewActive />
                          ) : (
                            <TabPreviewInactive />
                          )}
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  {/* <AlertDefaultCopy /> */}
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      {/* <DefaultAlert /> */}
                      <div className="bg-primary-border h-3 w-full rounded-full">
                        <div className="bg-primary-main h-3 w-56 rounded-full sm:w-96"></div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">{/* <DefaultAlertCode /> */}</div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Default Progress Bar */}

          {/* Default Progress Bar Start */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Progress Bar with Text
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? (
                            <TabPreviewActive />
                          ) : (
                            <TabPreviewInactive />
                          )}
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  {/* <AlertDefaultCopy /> */}
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block items-start">
                      <div className="flex w-full justify-end">
                          <div class="group relative inline-block">
                            <button
                              className="p-2 rounded-lg focus:ring-4 focus:ring-neutral-200 text-neutral-700"
                              onClick={handleProgress}
                            >
                              <PlayIcon className="icon24" />
                            </button>
                            <div class="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-900 py-2 px-4 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                              <span class="absolute -bottom-1 left-1/2 -z-10 h-5 w-5 -translate-x-1/2 rotate-45 rounded bg-neutral-900"></span>
                              Click me baby
                            </div>
                        </div>
                      </div>
                      <div className="flex justify-between w-full">
                        <span className="font-medium text-primary-main dark:text-white">
                          Uploading <span className="animate-pulse">...</span>
                        </span>
                        <span className="font-medium text-primary-main dark:text-white">
                          {progress}%
                        </span>
                      </div>
                      <div className="bg-primary-border h-3 w-full rounded-full">
                        <div
                          className="bg-primary-main h-3 w-1/5 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">{/* <DefaultAlertCode /> */}</div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Default Progress Bar */}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
