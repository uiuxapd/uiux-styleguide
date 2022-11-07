import React, { Fragment } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../BtnCond";
import { Tab } from "@headlessui/react";
import { ToggleBaseCode, ToggleDisableCode, ToggleErrorCode } from "./FormCode";
import { FormToggleCopy } from "./FormCopyAction";

const ToggleComponent = (props) => {
  return (
    <div ref={props.refer}>
      <Tab.Group>
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg capitalize sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
            toggle
          </h4>
          <div className="flex items-center gap-2 sm:gap-3">
            <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div className="focus:outline-none">
                    {selected ? <TabPreviewActive /> : <TabPreviewInactive />}
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
            <FormToggleCopy/>
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <div className="component-section">
              <div className="flex justify-center w-full gap-4 flex-wrap">
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-5">
                            <input type="checkbox" id="toggle" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                            <div className="w-full h-full bg-white border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-blue-600 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out after:duration-300 peer-checked:bg-blue-600 peer-checked:after:left-3 peer-checked:after:bg-white"></div>
                        </div>
                        <label htmlFor="toggle" className="capitalize">toggle base</label>
                    </div>                   
                </div>                
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-5">
                            <input type="checkbox" id="toggledisable" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" defaultChecked disabled />
                            <div className="w-full h-full bg-white border-2 border-primary-border peer-hover:border-slate-300 rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-slate-400 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out after:duration-300 peer-checked:bg-slate-400 peer-checked:after:left-3 peer-checked:after:bg-white"></div>
                        </div>
                        <label htmlFor="toggledisable" className="capitalize">toggle disable</label>
                    </div>                   
                </div>                
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-5">
                            <input type="checkbox" id="toggleerror" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" defaultChecked />
                            <div className="w-full h-full bg-white border-2 border-error-border peer-hover:border-error-main rounded-full peer-hover:ring-2 peer-hover:ring-error-focused relative overflow-hidden after:absolute after:w-3.5 after:h-3.5 after:bg-error-main after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-0.5 after:rotate-45 after:z-[2] after:ease-in-out after:duration-300 peer-checked:bg-error-main peer-checked:after:left-3 peer-checked:after:bg-error-border"></div>
                        </div>
                        <label htmlFor="toggleerror" className="capitalize text-error-main">toggle error</label>
                    </div>                   
                </div>                
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="overflow gap-4">
              <ToggleBaseCode />
              <ToggleDisableCode />
              <ToggleErrorCode />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default ToggleComponent
