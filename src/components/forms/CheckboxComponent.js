import React, { Fragment } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../BtnCond";
import { Tab } from "@headlessui/react";

const CheckboxComponent = () => {
  return (
    <div>
      <Tab.Group>
        <div className="flex items-center gap-2 mb-4">
          <h4 className="text-lg capitalize sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
            checkbox
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
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel className="outline-none">
            <div className="component-section">
              <div className="flex justify-center w-full gap-4 flex-wrap">
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                        <input type="checkbox" name="checkbox" id="checkbox" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" />
                        <div className="w-full h-full bg-white peer-checked:bg-primary-main border-2 border-primary-border peer-hover:border-primary-main rounded-md peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
                        </div>
                        <label htmlFor="checkbox" className="capitalize">checkbox base</label>
                    </div>                    
                </div>                
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                        <input type="checkbox" name="checkboxdisable" id="checkboxdisable" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" disabled checked />
                        <div className="w-full h-full bg-white peer-checked:bg-slate-400 border-2 border-primary-border peer-hover:border-slate-400 rounded-md peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
                        </div>
                        <label htmlFor="checkboxdisable" className="capitalize">checkbox disable</label>
                    </div>                                       
                </div>                
                <div className="grow shrink-0 basis-1/2 md:basis-1/4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-5 h-5">
                        <input type="checkbox" name="checkboxerror" id="checkboxerror" className="peer w-full h-full absolute opacity-0 cursor-pointer z-[3]" checked />
                        <div className="w-full h-full bg-white peer-checked:bg-error-main border-2 border-error-border peer-hover:border-error-main rounded-md peer-hover:ring-2 peer-hover:ring-[#F0F5FF] before:invisible after:invisible before:absolute before:w-[2px] before:h-1.5 before:bg-white before:rounded-full before:top-[55%] before:-translate-y-1/2 before:left-1/2 before:-translate-x-1 before:-rotate-45 before:z-[2] after:absolute after:w-[2px] after:h-[10px] after:bg-white after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:rotate-45 after:z-[2] peer-checked:before:visible peer-checked:after:visible"></div>
                        </div>
                        <label htmlFor="checkboxerror" className="capitalize text-error-main">checkbox error</label>
                    </div>                                        
                </div>                
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className="outline-none">
            <div className="overflow"></div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default CheckboxComponent
