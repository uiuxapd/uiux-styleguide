import { Tab } from "@headlessui/react";
import React, { Fragment, useRef } from "react";
import {
  BadgesWithIconCode,
  DefaultBadgesCode,
  DismissableBadgesCode,
  NotificationBadgesCode,
} from "../components/badges/BadgesCode";
import {
  BadgeWithIcon,
  DefaultBadges,
  DismissableBadges,
  NotificationBadge,
} from "../components/badges/BadgesComponent";
import {
  BadgesWithIconCopy,
  DefaultBadgesCopy,
  DismissableBadgesCopy,
  NotificationBadgesCopy,
} from "../components/badges/BadgesCopyAction";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import BtnIndex from "../components/BtnIndex";

const Badges = () => {
  const toDefaultBadges = useRef(null),
    toBadgesWithIcon = useRef(null),
    toDismissableBadges = useRef(null),
    toNotificationBadges = useRef(null);
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
          <div ref={toDefaultBadges} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-2 flex-grow">
                    <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                      Default Badges
                    </h4>
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
                <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-500 tracking-wide">
                  Use the <span className="text-primary-main">text-sm</span> if
                  you want to create a large variant of the badges.
                </p>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block flex-row flex-wrap">
                      <DefaultBadges />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <DefaultBadgesCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toBadgesWithIcon} className="flex flex-col gap-4">
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
                  <div className="h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden md:block"></div>
                  <BadgesWithIconCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block flex-row flex-wrap justify-center">
                      <BadgeWithIcon />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BadgesWithIconCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toDismissableBadges} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Dismissable Badges
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
                  <DismissableBadgesCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block flex-row flex-wrap">
                      <DismissableBadges />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <DismissableBadgesCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* End */}

          {/* Start */}
          <div ref={toNotificationBadges} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center gap-2">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50 flex-grow">
                  Notification Badges
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
                  <NotificationBadgesCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block flex-row justify-center gap-8">
                      <NotificationBadge />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <NotificationBadgesCode />
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
            <BtnIndex reference={toDefaultBadges} label="default badges" />
          </li>
          <li>
            <BtnIndex reference={toBadgesWithIcon} label="badges with icon" />
          </li>
          <li>
            <BtnIndex
              reference={toDismissableBadges}
              label="dismissable badges"
            />
          </li>
          <li>
            <BtnIndex
              reference={toNotificationBadges}
              label="notification badges"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Badges;
