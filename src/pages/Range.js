import React from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import { Tab } from "@headlessui/react";
import RangeSimple from "../components/range/RangeComponent";
import SimpleRangeCode from "../components/range/RangeCode";

const Range = () => {
  return (
    <div className="content-left">
      <div className="pb-4 mb-8 border-b border-slate-200 dark:border-slate-800">
        <h1 className="mb-4">Range</h1>
        <p className="leading-relaxed dark:text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
          nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
          dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
          necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
          recusandae architecto. Veniam, fuga nam?
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-grow items-center">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Single Range
                </h4>
                <span class="warning-badge">Require JS</span>
              </div>
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
                {/* <SimpleStepCopy /> */}
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <div className="component-section">
                  <div className="component-block">
                    <RangeSimple />
                  </div>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="component-section">
                  <div className="component-block">
                    <SimpleRangeCode />
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Range;
