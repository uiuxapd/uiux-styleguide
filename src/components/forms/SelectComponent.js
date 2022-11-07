import React, { Fragment } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../BtnCond";
import { Tab } from "@headlessui/react";
import { SelectBaseCode, SelectDisableCode, SelectErrorCode } from "./FormCode";
import { FormSelectCopy } from "./FormCopyAction";

const SelectComponent = (props) => {
  return (
    <div ref={props.refer}>
      <Tab.Group>
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg capitalize sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
            select dropdown
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
            <FormSelectCopy/>
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <div className="component-section">
              <div className="flex justify-center w-full gap-4 flex-wrap">
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <label htmlFor="select" className="capitalize text-slate-700">
                    select base
                    </label>
                    <div className="mt-2 relative group">
                      <span className="w-2 h-2 border-r-2 border-b-2 border-slate-400 group-hover:border-primary-main group-focus-within:border-primary-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center"></span>
                      <select id="select" className="appearance-none block w-full py-2.5 px-4 text-base bg-white border border-slate-300 hover:border-primary-main rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main ">
                        <option value="1">Design</option>
                        <option value="2">Also design</option>
                        <option value="3">Design again</option>
                      </select>
                    </div>                    
                </div>         
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <label htmlFor="selectdisable" className="capitalize text-slate-700">
                    select disable
                    </label>
                    <div className="mt-2 relative group">
                      <span className="w-2 h-2 border-r-2 border-b-2 border-slate-400 group-focus-within:border-primary-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center"></span>
                      <select id="selectdisable" disabled className="appearance-none block w-full py-2.5 px-4 text-base text-slate-500 bg-slate-200 border border-slate-300 hover:border-slate-300 rounded-lg leading-tight focus:outline-none focus:bg-white focus:ring focus:ring-primary-focused focus:border-primary-main ">
                        <option value="1">Design</option>
                        <option value="2">Also design</option>
                        <option value="3">Design again</option>
                      </select>
                    </div>                    
                </div>         
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <label htmlFor="selecterror" className="capitalize text-slate-700">
                    select error
                    </label>
                    <div className="mt-2 relative group">
                      <span className="w-2 h-2 border-r-2 border-b-2 border-error-border group-hover:border-error-main group-focus-within:border-error-main absolute top-1/2 right-4 -translate-y-1.5 rotate-45 origin-center"></span>
                      <select id="selecterror" className="appearance-none block w-full py-2.5 px-4 text-base text-error-main bg-error-surface border border-error-border hover:border-error-main rounded-lg leading-tight focus:outline-none focus:bg-error-surface focus:ring focus:ring-error-focused focus:border-error-main ">
                        <option value="1">Design</option>
                        <option value="2">Also design</option>
                        <option value="3">Design again</option>
                      </select>
                    </div>                    
                    <span className="relative text-error-main text-xs italic">this select has an error</span>
                </div>         
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="overflow gap-4">
              <SelectBaseCode />
              <SelectDisableCode />
              <SelectErrorCode />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default SelectComponent
