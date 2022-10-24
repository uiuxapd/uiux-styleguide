import { Tab } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';
import { DefaultBadges } from '../components/badges/BadgesComponent';
import { DefaultBadgesCopy } from '../components/badges/BadgesCopyAction';
import { TabCodeActive, TabCodeInactive, TabPreviewActive, TabPreviewInactive } from '../components/BtnCond';
import BtnIndex from '../components/BtnIndex';

const Badges = () => {
    const toDefaultAlert = useRef(null),
    toAlertWithDescription = useRef(null);
  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Badges</h1>
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
          <div ref={toDefaultAlert} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex gap-4">
                <div className='flex flex-col gap-2 flex-grow'>
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Default Badges
                </h4>
                <p className='text-sm sm:text-base text-neutral-500 dark:text-neutral-500 tracking-wide'>Use the <span className='text-primary-main'>text-sm</span> if you want to create a large variant of the badges.</p>
                </div>
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
                  <DefaultBadgesCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      <DefaultBadges />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    {/* <DefaultAlertCode /> */}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toAlertWithDescription} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Badges With Icon
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
                  {/* <AlertWithDescriptionCopy /> */}
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block">
                      {/* <AlertWithDescription /> */}
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    {/* <AlertWithDescriptionCode /> */}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
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
            <BtnIndex reference={toDefaultAlert} label="default alert" />
          </li>
          <li>
            <BtnIndex
              reference={toAlertWithDescription}
              label="alert with description"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Badges