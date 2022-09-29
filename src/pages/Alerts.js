import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";
import {
  AlertWithDescriptionCode,
  DefaultAlertCode,
} from "../components/alerts/AlertCode";
import {
  AlertDefaultCopy,
  AlertWithDescriptionCopy,
} from "../components/alerts/AlertCopyAction";
import {
  AlertWithDescription,
  DefaultAlert,
} from "../components/alerts/AlertsComponent";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";

const Alerts = () => {
  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Alerts</h1>
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
          {/* Default Alert Start */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Default Alert
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
                  <AlertDefaultCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      <DefaultAlert />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <DefaultAlertCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Default Alert End */}

          {/* Alert with Description Start */}
          <div className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Alert with Description
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
                  <AlertWithDescriptionCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      <AlertWithDescription />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <AlertWithDescriptionCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Alert with Description End */}
        </div>
      </div>
    </>
  );
};

export default Alerts;
