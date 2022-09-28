import React from "react";
import {
    TabCodeActive,
    TabCodeInactive,
    TabPreviewActive,
    TabPreviewInactive,
  } from "../components/BtnCond";
import {Tab} from "@headlessui/react";
import {
    StepWizzard,
    StepMini, 
} from "../components/steper/StepComponent";
import {
    StepWizzardCode, 
    StepMiniCode 
} from "../components/steper/StepCode";
import StepWizzardCopy from "../components/steper/StepCopyAction";

const Steper = () => {

    return (
        <>
        <div className="content-left">
            <div className="pb-4 mb-8 border-b border-slate-200 dark:border-slate-800">
              <h1 className="mb-4">Stepper</h1>
              <p className="leading-relaxed dark:text-slate-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                  suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
                  nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
                  dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
                  necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
                  recusandae architecto. Veniam, fuga nam?
              </p>
            </div>

        {/* StepWizzard */}
            <div className="flex flex-col gap-24">
                <div className="flex flex-col gap-4">
                    <Tab.Group>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                Wizzard Steper
                            </h4>
                            <div className="flex items-center">
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
                                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                                {/* <BtnPrimaryCopy /> */}
                            </div>
                        </div>
                        <Tab.Panels>
                            <Tab.Panel>
                                <div className="component-section">
                                    <div className="component-block">
                                        <StepWizzard />
                                    </div>
                                </div>
                            </Tab.Panel>
                            <Tab.Panel>
                                <div className="component-section">
                                    <div className="component-block">
                                        <StepWizzardCode />
                                    </div>
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

            {/* StepMini */}
                <div className="flex flex-col gap-4">
                    <Tab.Group>
                        <div className="flex items-center justify-between">
                            <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                Mini Steper
                            </h4>
                            <div className="flex items-center">
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
                                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                                <StepWizzardCopy />
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
            </div>
        </div>
        <div className="content-right"></div>
        </>
    );
    
};

export default Steper;