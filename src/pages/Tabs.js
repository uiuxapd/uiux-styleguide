import { Tab } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import BtnIndex from "../components/BtnIndex";
import {
  RoundedTopTabCode,
  TabWithBgCode,
  UnderlineTabCode,
} from "../components/tabs/TabsCode";
import {
  InteractiveTab,
  RoundedTopTab,
  TabWithBg,
  UnderlineTab,
} from "../components/tabs/TabsComponent";
import {
  RoundedTopTabCopy,
  TabWithBgCopy,
  UnderlineTabCopy,
} from "../components/tabs/TabsCopyAction";

export const Tabs = () => {
  const toTabWithBg = useRef(null),
    toRoundedTopTab = useRef(null),
    toUndelineTab = useRef(null),
    toInteractiveTab = useRef(null);
  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Tabs</h1>
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
          {/* Start */}
          <div ref={toTabWithBg} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Tabs With Background
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
                  <TabWithBgCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      <TabWithBg />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <TabWithBgCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toRoundedTopTab} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Rounded Top Tabs
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
                  <RoundedTopTabCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      <RoundedTopTab />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <RoundedTopTabCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toUndelineTab} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Underline Tabs
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
                  <UnderlineTabCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      <UnderlineTab />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <UnderlineTabCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toInteractiveTab} className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <h3 className="flex-grow">Interactive Tabs</h3>
            </div>
            <div className="component-section items-center">
              <InteractiveTab />
            </div>
          </div>
          {/* End */}
        </div>
      </div>
      <div className="content-right">
        <h6
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer"
        >
          <span className="text-primary-main">#</span> On this page
        </h6>
        <ul>
          <li>
            <BtnIndex reference={toTabWithBg} label="tabs with background" />
          </li>
          <li>
            <BtnIndex reference={toRoundedTopTab} label="rounded top tabs" />
          </li>
          <li>
            <BtnIndex reference={toUndelineTab} label="underline tabs" />
          </li>
          <li>
            <BtnIndex reference={toInteractiveTab} label="interactive tabs" />
          </li>
        </ul>
      </div>
    </>
  );
};
