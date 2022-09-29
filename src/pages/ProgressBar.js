import { Tab } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import {
  DefaultProgressBar,
  ProgressBarWithText,
} from "../components/progressbar/ProgressBarComponent";

const ProgressBar = () => {
  const [progressPercentage, setProgressPercentage] = useState(20);

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
                      <DefaultProgressBar percentage={progressPercentage} />
                      <div class="group relative inline-block mt-12 w-full">
                        <input
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                          type="range"
                          name="points"
                          min="0"
                          max="100"
                          value={progressPercentage}
                          onChange={(e) => {
                            setProgressPercentage(e.target.value);
                          }}
                        />
                        <div class="absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-neutral-900 py-2 px-4 text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-all delay-200">
                          <span class="absolute -bottom-1 left-1/2 -z-10 h-5 w-5 -translate-x-1/2 rotate-45 rounded bg-neutral-900"></span>
                          Slide me baby
                        </div>
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
          {/* Default Progress Bar End*/}

          {/* Progress Bar with Text Start */}
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
                      <ProgressBarWithText />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">{/* <DefaultAlertCode /> */}</div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Progress Bar with Text Bar */}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
