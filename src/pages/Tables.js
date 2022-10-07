import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import {Tab} from "@headlessui/react";
import {
  BasicTable,
  ScrollingTable,
} from "../components/Table/TableComponent";
import {
  BasicTableCode,
  ScrollingTableCode,
} from "../components/Table/TableCode";
import { 
  BasicTableCopy,
  ScrollingTableCopy,
} from "../components/Table/TableCopyAction";
import { React, useRef } from "react";
import BtnIndex from "../components/BtnIndex";

const Tables = () => {
  const toBasicTable = useRef(null),
  toScrollingTable = useRef(null);

  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-8 border-b border-neutral-200 dark:border-neutral-800">
          <h1 className="mb-4">Table</h1>
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
          {/* Table Start */}
          <div>
            <div ref={toBasicTable} className="flex flex-col gap-4">
              <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Basic Table
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
                    <BasicTableCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel>
                    <div className="component-section">
                      <BasicTable />
                    </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="component-section">
                    <div className="component-block">
                        <BasicTableCode />
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
          {/* Table End */}
          
          
          {/* Table Start */}
          <div ref={toScrollingTable} className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Tab.Group>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Scrolling Table
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
                      <ScrollingTableCopy />
                    </div>
                  </div>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="component-section">
                          <ScrollingTable />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div className="component-section">
                        <div className="component-block">
                          <ScrollingTableCode />
                        </div>
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
              </Tab.Group>
            </div>
            {/* Table End */}
          </div>
        </div>
      </div>

      <div className="content-right">
      <h6>on this page</h6>
        <ul>
          <li><BtnIndex reference={toBasicTable} label="basic table" /></li>
          <li><BtnIndex reference={toScrollingTable} label="scrolling table" /></li>
        </ul>
      </div>
    </>
  );
};

export default Tables;
