import React from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import { Tab } from "@headlessui/react";
import {
  StepCircle,
  StepMini,
  StepVertical,
  SimpleStep,
} from "../components/steper/StepComponent";
import {
  StepCircleCode,
  StepMiniCode,
  SimpleStepCode,
  VerticalCircleCode,
} from "../components/steper/StepCode";
import {
  StepMiniCopy,
  SimpleStepCopy,
  StepCircleCopy,
  StepVerticalCopy,
} from "../components/steper/StepCopyAction";

const Steper = () => {
  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-slate-200 dark:border-slate-800">
          <h1 className="mb-4">Steps</h1>
          <p className="leading-relaxed dark:text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            suscipit magnam minima. Beatae deserunt perferendis aut ipsum
            labore, nihil laborum sint, vitae aspernatur dolor quibusdam velit
            fugit dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
            necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
            recusandae architecto. Veniam, fuga nam?
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {/* Simple  */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Simple
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab>
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
                    <Tab>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <SimpleStepCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <SimpleStep />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <SimpleStepCode />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Circle */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Circle
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab>
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
                    <Tab>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <StepCircleCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <StepCircle />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <StepCircleCode />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* Mini Circle */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Mini Circle
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab>
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
                    <Tab>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <StepMiniCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <StepMini />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <StepMiniCode />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          {/* Vertical Circle */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Vertical Circle
                </h4>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab>
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
                    <Tab>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <StepVerticalCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <StepVertical />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                      <VerticalCircleCode />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      <div className="content-right">
        <h6
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <span className="text-primary-main">#</span> On this page
        </h6>
      </div>
    </>
  );
};

export default Steper;
