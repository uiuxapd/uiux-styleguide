import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Accordion = () => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md">
        <Disclosure>
          {({ open }) => (
            <>
            <div className='border border-primary-border rounded-lg'>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white p-4 text-left text-sm font-medium text-primary-main hover:bg-primary-surface focus:outline-none focus-visible:ring focus-visible:ring-primary-focused focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } icon20 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-t border-primary-border">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
            <div className='border border-primary-border rounded-lg'>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white p-4 text-left text-sm font-medium text-primary-main hover:bg-primary-surface focus:outline-none focus-visible:ring focus-visible:ring-primary-focused focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } icon20 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border-t border-primary-border">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default Accordion