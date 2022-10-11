import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

export const DefaultBreadcrumbs = () => {
  return (
    <ul className="flex items-center">
      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="text-neutral-400 hover:text-primary-hover dark:hover:text-sky-400 transition-all"
        >
          <HomeIcon className="icon24" />
        </a>
        <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
      </li>

      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 1
        </a>
        <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
      </li>

      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 2
        </a>
        <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
      </li>
      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="hover:text-primary-hover text-primary-main dark:text-sky-300 dark:hover:text-sky-400"
        >
          Page 3
        </a>
      </li>
    </ul>
  );
};

export const SlashBreadcrumbs = () => {
  return (
    <ul className="flex items-center">
      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="text-neutral-400 hover:text-primary-hover dark:hover:text-sky-400 transition-all"
        >
          <HomeIcon className="icon24" />
        </a>
        <span className="mx-2 text-neutral-400">/</span>
      </li>

      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 1
        </a>
        <span className="mx-2 text-neutral-400">/</span>
      </li>

      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 2
        </a>
        <span className="mx-2 text-neutral-400">/</span>
      </li>
      <li className="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          className="hover:text-primary-hover text-primary-main dark:text-sky-300 dark:hover:text-sky-400"
        >
          Page 3
        </a>
      </li>
    </ul>
  );
};

export const SolidBgBreadcrumbs = () => {
  return (
    <div className="bg-white py-2 px-4 w-fit box-border border border-primary-border rounded-lg shadow">
      <ul className="flex items-center">
        <li className="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            className="text-neutral-400 hover:text-primary-hover transition-all"
          >
            <HomeIcon className="icon24" />
          </a>
          <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
        </li>

        <li className="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            className="text-neutral-600 hover:text-primary-hover"
          >
            Page 1
          </a>
          <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
        </li>

        <li className="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            className="text-neutral-600 hover:text-primary-hover"
          >
            Page 2
          </a>
          <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
        </li>
        <li className="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            className="hover:text-primary-hover text-primary-main"
          >
            Page 3
          </a>
        </li>
      </ul>
    </div>
  );
};
