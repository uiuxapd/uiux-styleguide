import { Tab } from "@headlessui/react";
import { Fragment, React, useState, useRef } from "react";
import {
  BorderedAccordionCode,
  DefaultAccordionCode,
} from "../components/accordion/AccordionCode";
import {
  BorderedAccordion,
  DefaultAccordion,
} from "../components/accordion/AccordionComponent";
import {
  BorderedAccordionCopy,
  DefaultAccordionCopy,
} from "../components/accordion/AccordionCopyAction";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import BtnIndex from "../components/BtnIndex";

const Accordion = () => {
  const toDefaultAccordion = useRef(null),
    toBorderedAccordion = useRef(null);

  const content = [
    {
      headerTitle: "Why can’t I sign in?",
      bodyContent:
        "Make sure you’re trying to sign in to the right application system. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.",
    },
    {
      headerTitle: "Where can I find out about funding?",
      bodyContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
    {
      headerTitle: "How can I make a change to my application?",
      bodyContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
    },
  ];

  const [defaulAccordionClicked, setDefaultAccordionClicked] = useState("0");
  const handleToggleDefault = (index) => {
    if (defaulAccordionClicked === index) {
      return setDefaultAccordionClicked("0");
    }
    setDefaultAccordionClicked(index);
  };

  const [borderedAccordionClicked, setBorderedAccordionClicked] = useState("0");
  const handleToggleBordered = (index) => {
    if (borderedAccordionClicked === index) {
      return setBorderedAccordionClicked("0");
    }
    setBorderedAccordionClicked(index);
  };

  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Accordions</h1>
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
          <div ref={toDefaultAccordion} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Default Accordion
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
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <DefaultAccordionCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section h-[534px] sm:h-[364px] md:h-[388px] xl:h-[340px] 2xl:h-[316px]">
                    <div className="component-block">
                      <h4 className="text-xl mb-2 text-neutral-900 dark:text-white">
                        Frequently Asked Questions
                      </h4>
                      <div className="border-box border border-primary-border rounded-lg overflow-hidden bg-white shadow">
                        <div className="divide-y divide-primary-border">
                          {content.map((content, index) => (
                            <DefaultAccordion
                              onToggle={() => handleToggleDefault(index)}
                              open={defaulAccordionClicked === index}
                              key={index}
                              content={content}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <DefaultAccordionCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toBorderedAccordion} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Bordered Accordion
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
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BorderedAccordionCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section h-[559px] sm:h-[391px] md:h-[429px] xl:h-[375px] 2xl:h-[351px]">
                    <div className="component-block">
                      <h4 className="text-xl mb-2 text-neutral-900 dark:text-white">
                        Frequently Asked Questions
                      </h4>
                      <div className="flex flex-col gap-2">
                        {content.map((content, index) => (
                          <BorderedAccordion
                            onToggle={() => handleToggleBordered(index)}
                            open={borderedAccordionClicked === index}
                            key={index}
                            content={content}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BorderedAccordionCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}
        </div>
      </div>

      <div className="content-right">
        <h6>on this page</h6>
        <ul>
          <li>
            <BtnIndex
              reference={toDefaultAccordion}
              label="default accordion"
            />
          </li>
          <li>
            <BtnIndex
              reference={toBorderedAccordion}
              label="bordered accordion"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Accordion;
