import React, { Fragment } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../BtnCond";
import { Tab } from "@headlessui/react";
import FormComponent from "./FormComponent";

const FormGroupComponent = (props) => {
  return (
    <div ref={props.refer}>
      <Tab.Group>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-2 flex-grow items-center">
            <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Form Group
            </h4>
            <span class="warning-badge">Require JS</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div className="focus:outline-none">
                    {selected ? <TabPreviewActive /> : <TabPreviewInactive />}
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
              <div className="flex w-full justify-center">
                <FormComponent />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default FormGroupComponent;
