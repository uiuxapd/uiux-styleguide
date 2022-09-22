import { Fragment, React, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  btnDisable,
  btnError,
  btnFullRounded,
  btnIconOnly,
  btnIconOnlyRounded,
  btnLeadIcon,
  btnOutlined,
  btnPrimary,
  btnSecondary,
  btnText,
  btnTrailIcon,
} from "../code-snippets/ButtonsSnippets";
import {
  BtnCopied,
  BtnCopy,
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
  BtnIconOnlyRoundedCode,
  BtnLeadIconCode,
  BtnOutlinedCode,
  BtnPrimaryCode,
  BtnSecondaryCode,
  BtnTextCode,
  BtnTrailIconCode,
} from "../components/buttons/BtnCode";

const Buttons = () => {
  // Copy Trigger
  const [isPrimaryCopied, setPrimaryCopy] = useState(false);
  const onCopyPrimary = () => {
    setPrimaryCopy(true);
    setTimeout(() => {
      setPrimaryCopy(false);
    }, 1500);
  };
  const [isSecondaryCopied, setSecondaryCopy] = useState(false);
  const onCopySecondary = () => {
    setSecondaryCopy(true);
    setTimeout(() => {
      setSecondaryCopy(false);
    }, 1500);
  };
  const [isOutlinedCopied, setOutlinedCopy] = useState(false);
  const onCopyOutlined = () => {
    setOutlinedCopy(true);
    setTimeout(() => {
      setOutlinedCopy(false);
    }, 1500);
  };
  const [isErrorCopied, setErrorCopy] = useState(false);
  const onCopyError = () => {
    setErrorCopy(true);
    setTimeout(() => {
      setErrorCopy(false);
    }, 1500);
  };
  const [isTextCopied, setTextCopy] = useState(false);
  const onCopyText = () => {
    setTextCopy(true);
    setTimeout(() => {
      setTextCopy(false);
    }, 1500);
  };
  const [isBtnLeadIconCopied, setBtnLeadIconCopy] = useState(false);
  const onCopyBtnLeadIcon = () => {
    setBtnLeadIconCopy(true);
    setTimeout(() => {
      setBtnLeadIconCopy(false);
    }, 1500);
  };
  const [isBtnTrailIconCopied, setBtnTrailIconCopy] = useState(false);
  const onCopyBtnTrailIcon = () => {
    setBtnTrailIconCopy(true);
    setTimeout(() => {
      setBtnTrailIconCopy(false);
    }, 1500);
  };
  const [isDisableCopied, setDisableCopy] = useState(false);
  const onCopyDisable = () => {
    setDisableCopy(true);
    setTimeout(() => {
      setDisableCopy(false);
    }, 1500);
  };
  const [isBtnRoundedCopied, setBtnRoundedCopy] = useState(false);
  const onCopyBtnRounded = () => {
    setBtnRoundedCopy(true);
    setTimeout(() => {
      setBtnRoundedCopy(false);
    }, 1500);
  };
  const [isBtnIconOnlyCopied, setBtnIconOnlyCopy] = useState(false);
  const onCopyBtnIconOnly = () => {
    setBtnIconOnlyCopy(true);
    setTimeout(() => {
      setBtnIconOnlyCopy(false);
    }, 1500);
  };
  const [isBtnIconOnlyRoundedCopied, setBtnIconOnlyRoundedCopy] =
    useState(false);
  const onCopyBtnIconOnlyRounded = () => {
    setBtnIconOnlyRoundedCopy(true);
    setTimeout(() => {
      setBtnIconOnlyRoundedCopy(false);
    }, 1500);
  };

  return (
    <>
      <div className="pb-4 mb-10 border-b border-neutral-200 dark:border-neutral-700">
        <h1 className="mb-4">Buttons</h1>
        <p className="leading-relaxed dark:text-neutral-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          suscipit magnam minima. Beatae deserunt perferendis aut ipsum labore,
          nihil laborum sint, vitae aspernatur dolor quibusdam velit fugit
          dolores cum, ad possimus maiores nulla? Ut, minus? Natus hic
          necessitatibus, sapiente consectetur nihil ea suscipit itaque facere
          recusandae architecto. Veniam, fuga nam?
        </p>
      </div>

      <div className="flex flex-col gap-24">
        {/* Button Primary Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Primary
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnPrimary} onCopy={onCopyPrimary}>
                  <div className="hidden sm:flex items-center">
                    {isPrimaryCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnPrimary />
              </Tab.Panel>
              <Tab.Panel>
                <BtnPrimaryCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Primary End */}

        {/* Button Secondary Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Secondary
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnSecondary} onCopy={onCopySecondary}>
                  <div className="hidden sm:flex items-center">
                    {isSecondaryCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnSecondary />
              </Tab.Panel>
              <Tab.Panel>
                <BtnSecondaryCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Secondary End */}

        {/* Button Outlined Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Outlined
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnOutlined} onCopy={onCopyOutlined}>
                  <div className="hidden sm:flex items-center">
                    {isOutlinedCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnOutlined />
              </Tab.Panel>
              <Tab.Panel>
                <BtnOutlinedCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Outlined End */}

        {/* Button Error Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Error
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnError} onCopy={onCopyError}>
                  <div className="hidden sm:flex items-center">
                    {isErrorCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnError />
              </Tab.Panel>
              <Tab.Panel>
                <BtnErrorCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Error End */}

        {/* Button Text Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Text Only
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnText} onCopy={onCopyText}>
                  <div className="hidden sm:flex items-center">
                    {isTextCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnText />
              </Tab.Panel>
              <Tab.Panel>
                <BtnTextCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Text End */}

        {/* Button Lead Icon Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button with Lead Icon
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnLeadIcon} onCopy={onCopyBtnLeadIcon}>
                  <div className="hidden sm:flex items-center">
                    {isBtnLeadIconCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnLeadIcon />
              </Tab.Panel>
              <Tab.Panel>
                <BtnLeadIconCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Lead Icon End */}

        {/* Button Trail Icon Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button with Trail Icon
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard
                  text={btnTrailIcon}
                  onCopy={onCopyBtnTrailIcon}
                >
                  <div className="hidden sm:flex items-center">
                    {isBtnTrailIconCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnTrailIcon />
              </Tab.Panel>
              <Tab.Panel>
                <BtnTrailIconCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Trail Icon End */}

        {/* Button Disable Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Disable Button
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnDisable} onCopy={onCopyDisable}>
                  <div className="hidden sm:flex items-center">
                    {isDisableCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnDisable />
              </Tab.Panel>
              <Tab.Panel>
                <BtnDisableCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Disable End */}

        {/* Button Full Rounded Button Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Full Rounded Button
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard
                  text={btnFullRounded}
                  onCopy={onCopyBtnRounded}
                >
                  <div className="hidden sm:flex items-center">
                    {isBtnRoundedCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnFullRounded />
              </Tab.Panel>
              <Tab.Panel>
                <BtnFullRoundedCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Full Rounded Button End */}

        {/* Button Icon only Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Icon Only
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard text={btnIconOnly} onCopy={onCopyBtnIconOnly}>
                  <div className="hidden sm:flex items-center">
                    {isBtnIconOnlyCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnIconOnly />
              </Tab.Panel>
              <Tab.Panel>
                <BtnIconOnlyRoundedCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Icon only End */}

        {/* Button Icon only Rounded Start */}
        <div className="flex flex-col gap-4">
          <Tab.Group>
            <div className="flex items-center justify-between">
              <h4 className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-50">
                Button Icon Only Rounded
              </h4>
              <div className="flex items-center">
                <Tab.List className="flex bg-neutral-100 rounded-lg p-0.5">
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
                <div className="mx-2 md:mx-4 h-5 w-px bg-neutral-200 hidden sm:block"></div>
                <CopyToClipboard
                  text={btnIconOnlyRounded}
                  onCopy={onCopyBtnIconOnlyRounded}
                >
                  <div className="hidden sm:flex items-center">
                    {isBtnIconOnlyRoundedCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              </div>
            </div>
            <Tab.Panels>
              <Tab.Panel>
                <BtnIconOnlyRounded />
              </Tab.Panel>
              <Tab.Panel>
                <BtnIconOnlyRoundedCode />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* Button Icon only Rounded End */}
      </div>
    </>
  );
};

export default Buttons;
