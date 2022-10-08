import { Tab } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import BtnIndex from "../components/BtnIndex";
import {
  DefaultProgressBar,
  ProgressBarWithText,
} from "../components/progressbar/ProgressBarComponent";
import {
  DefaultProgressCode,
  ProgressWithTextCode,
} from "../components/progressbar/ProgressCode";
import {
  ProgressDefaultCopy,
  ProgressWithTextCopy,
} from "../components/progressbar/ProgressCopyAction";

const ProgressBar = () => {
  const toDefaultProgressbar = useRef(null),
    toProgressbarWithText = useRef(null);
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
          <div ref={toDefaultProgressbar} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Default Progress Bar
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
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
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <ProgressDefaultCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
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
                        <div class="tooltip-top">Slide me baby</div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <DefaultProgressCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Default Progress Bar End*/}

          {/* Progress Bar with Text Start */}
          <div ref={toProgressbarWithText} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Progress Bar with Text
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
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
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <ProgressWithTextCopy />
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
                  <div className="overflow">
                    <ProgressWithTextCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Progress Bar with Text Bar */}
        </div>
      </div>

      <div className="content-right">
        <h6>On this page</h6>
        <ul>
          <li>
            <BtnIndex
              reference={toDefaultProgressbar}
              label="default accordion"
            />
          </li>
          <li>
            <BtnIndex
              reference={toProgressbarWithText}
              label="bordered accordion"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProgressBar;
