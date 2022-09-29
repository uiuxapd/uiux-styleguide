import { Fragment, React, useRef } from "react";
import {
  TabCodeActive,
  TabCodeInactive,
  TabPreviewActive,
  TabPreviewInactive,
} from "../components/BtnCond";
import { Tab } from "@headlessui/react";
import {
  BtnDisable,
  BtnError,
  BtnFullRounded,
  BtnIconOnly,
  BtnIconOnlyRounded,
  BtnLeadIcon,
  BtnOutlined,
  BtnPrimary,
  BtnSecondary,
  BtnText,
  BtnTrailIcon,
} from "../components/buttons/BtnComponent";
import {
  BtnDisableCode,
  BtnErrorCode,
  BtnFullRoundedCode,
  BtnIconOnlyCode,
  BtnIconOnlyRoundedCode,
  BtnLeadIconCode,
  BtnOutlinedCode,
  BtnPrimaryCode,
  BtnSecondaryCode,
  BtnTextCode,
  BtnTrailIconCode,
} from "../components/buttons/BtnCode";
import {
  BtnDisableCopy,
  BtnErrorCopy,
  BtnIconOnlyCopy,
  BtnIconOnlyRoundedCopy,
  BtnLeadIconCopy,
  BtnOutlinedCopy,
  BtnPrimaryCopy,
  BtnRoundedCopy,
  BtnSecondaryCopy,
  BtnTextCopy,
  BtnTrailIconCopy,
} from "../components/buttons/BtnCopyAction";
import BtnIndex from "../components/BtnIndex";

const Buttons = () => {
  const toPrimary = useRef(null),
    toSecondary = useRef(null),
    toOutlined = useRef(null),
    toError = useRef(null),
    toTextOnly = useRef(null),
    toLeadIcon = useRef(null),
    toTrailIcon = useRef(null),
    toDisabled = useRef(null),
    toFullRounded = useRef(null),
    toIconOnly = useRef(null),
    toIconRounded = useRef(null);

  return (
    <>
      <div className="content-left">
        <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
          <h1 className="mb-4">Buttons</h1>
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
          {/* Button Primary Start */}
          <div ref={toPrimary} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Primary
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
                  <BtnPrimaryCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnPrimary />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnPrimaryCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Primary End */}

          {/* Button Secondary Start */}
          <div ref={toSecondary} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Secondary
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnSecondaryCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnSecondary />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnSecondaryCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Secondary End */}

          {/* Button Outlined Start */}
          <div ref={toOutlined} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Outlined
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnOutlinedCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnOutlined />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnOutlinedCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Outlined End */}

          {/* Button Error Start */}
          <div ref={toError} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Error
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnErrorCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnError />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnErrorCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Error End */}

          {/* Button Text Start */}
          <div ref={toTextOnly} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Text Only
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnTextCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnText />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="overflow">
                  <div>
                    <BtnTextCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Text End */}

          {/* Button Lead Icon Start */}
          <div ref={toLeadIcon} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button with Lead Icon
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnLeadIconCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnLeadIcon />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnLeadIconCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Lead Icon End */}

          {/* Button Trail Icon Start */}
          <div ref={toTrailIcon} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button with Trail Icon
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnTrailIconCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnTrailIcon />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnTrailIconCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Trail Icon End */}

          {/* Button Disable Start */}
          <div ref={toDisabled} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Disable Button
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnDisableCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnDisable />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnDisableCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Disable End */}

          {/* Button Full Rounded Start */}
          <div ref={toFullRounded} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Full Rounded Button
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnRoundedCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnFullRounded />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnFullRoundedCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Full Rounded End */}

          {/* Button Icon only Start */}
          <div ref={toIconOnly} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Icon Only
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnIconOnlyCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnIconOnly />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnIconOnlyCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Icon only End */}

          {/* Button Icon only Rounded Start */}
          <div ref={toIconRounded} className="flex flex-col gap-4">
            <Tab.Group>
              <div className="flex items-center justify-between">
                <h4 className="text-lg sm:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                  Button Icon Only Rounded
                </h4>
                <div className="flex items-center">
                  <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5 dark:bg-neutral-700">
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <div className="focus:outline-none">
                          {" "}
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
                          {" "}
                          {selected ? <TabCodeActive /> : <TabCodeInactive />}
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <div className="mx-2 sm:mx-4 h-5 w-px bg-neutral-200 dark:bg-neutral-700 hidden sm:block"></div>
                  <BtnIconOnlyRoundedCopy />
                </div>
              </div>
              <Tab.Panels>
                <Tab.Panel className="outline-none">
                  <div className="component-section">
                    <div className="component-block sm:flex-row sm:justify-center">
                      <BtnIconOnlyRounded />
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="outline-none">
                  <div className="overflow">
                    <BtnIconOnlyRoundedCode />
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          {/* Button Icon only Rounded End */}
        </div>
      </div>
      <div className="content-right">
        <h6>on this page</h6>
        <ul>
          <li>
            <BtnIndex reference={toPrimary} label="button primary" />
          </li>
          <li>
            <BtnIndex reference={toSecondary} label="button secondary" />
          </li>
          <li>
            <BtnIndex reference={toOutlined} label="button Outlined" />
          </li>
          <li>
            <BtnIndex reference={toError} label="button Error" />
          </li>
          <li>
            <BtnIndex reference={toTextOnly} label="button text only" />
          </li>
          <li>
            <BtnIndex reference={toLeadIcon} label="button with lead icon" />
          </li>
          <li>
            <BtnIndex reference={toTrailIcon} label="button with trail icon" />
          </li>
          <li>
            <BtnIndex reference={toDisabled} label="button disabled" />
          </li>
          <li>
            <BtnIndex reference={toFullRounded} label="button full rounded" />
          </li>
          <li>
            <BtnIndex reference={toIconOnly} label="button icon only" />
          </li>
          <li>
            <BtnIndex
              reference={toIconRounded}
              label="button icon only rounded"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;
