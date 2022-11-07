import React, { Fragment } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../BtnCond";
import { Tab } from "@headlessui/react";
import { RadioBaseCode, RadioDisableCode, RadioErrorCode } from "./FormCode";
import { FormRadioCopy } from "./FormCopyAction";

const RadioComponent = (props) => {
  return (
    <div ref={props.refer}>
      <Tab.Group>
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg capitalize sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
            radio button
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
            <FormRadioCopy/>
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <div className="component-section">
              <div className="flex justify-center w-full gap-4 flex-wrap">
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                      <div className="relative w-5 h-5">
                        <input type="radio" id="radio" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]"/>
                        <div className="w-full h-full bg-white peer-checked:bg-blue-600 border-2 border-primary-border peer-hover:border-primary-main rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible before:z-[2] before:absolute before:w-2 before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
                      </div>
                      <label htmlFor="radio" className="capitalize">
                      radio base
                      </label>
                    </div>
                </div>
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                        <input type="radio" id="radiodisable" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" disabled defaultChecked/>
                        <div className="w-full h-full bg-white peer-checked:bg-slate-400 border-2 border-primary-border peer-hover:border-slate-400 rounded-full peer-hover:ring-2 peer-hover:ring-primary-focused before:invisible before:z-[2] before:absolute before:w-2 before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
                        </div>
                        <label htmlFor="radiodisable" className="capitalize">
                        radio disable
                        </label>
                    </div>
                </div>
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                        <input type="radio" id="radioerror" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" defaultChecked/>
                        <div className="w-full h-full bg-white peer-checked:bg-error-main border-2 border-error-border peer-hover:border-error-border rounded-full peer-hover:ring-2 peer-hover:ring-error-focused before:invisible before:z-[2] before:absolute before:w-2 before:h-2 before:bg-white before:rounded-full before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:-rotate-45 peer-checked:before:visible"></div>
                        </div>
                        <label htmlFor="radioerror" className="capitalize text-error-main">
                        radio error
                        </label>
                    </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="overflow gap-4">
              <RadioBaseCode />
              <RadioDisableCode />
              <RadioErrorCode />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default RadioComponent
