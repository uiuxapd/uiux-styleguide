import { Popover, Transition } from '@headlessui/react'
import { Fragment, useRef, useState, React } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { btnPrimary } from '../components/buttons/BtnCodeSnippets';
import { BtnCopied, BtnCopy } from '../components/BtnCond';

export default function Documentation() {
  const [isPrimaryCopied, setPrimaryCopy] = useState(false);
  const onCopyPrimary = () => {
    setPrimaryCopy(true);
    setTimeout(() => {
      setPrimaryCopy(false);
    }, 1500);
  };

  const buttonRef = useRef(null)
  const timeoutDuration = 1100
  let timeout

  const closePopover = () => {
    return buttonRef.current?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true
      })
    )
  }

  const onClick = (open) => {
    clearTimeout(timeout)
    if (open) return
    return buttonRef.current?.click()
  }

  const onMouseLeave = (open) => {
    if (!open) return
    timeout = setTimeout(() => closePopover(), timeoutDuration)
  }

  return (
    <div className="">
      <Popover className="">
        {({ open }) => (
          <>
          <div onMouseLeave={onMouseLeave.bind(null, open)}>
            <Popover.Button
            ref={buttonRef}
              className={open}
            >
              <CopyToClipboard text={btnPrimary} onCopy={onCopyPrimary}>
                  <div className="hidden sm:flex items-center">
                    {isPrimaryCopied ? <BtnCopied /> : <BtnCopy />}
                  </div>
                </CopyToClipboard>
              
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel >
                <div className="overflow-hidden rounded-lg shadow-lg p-4" 
                onMouseEnter={onClick.bind(null, open)}
                      onMouseLeave={onMouseLeave.bind(null, open)}>
                Test
                </div>
              </Popover.Panel>
            </Transition>
            </div>
          </>
        )}
      </Popover>
    </div>
  )
}
