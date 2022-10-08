import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

export const DefaultBreadcrumbs = () => {
  return (
    <ul class="flex items-center">
      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="text-neutral-400 hover:text-primary-hover dark:hover:text-sky-400 transition-all"
        >
          <HomeIcon className="icon24" />
        </a>
        <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
      </li>

      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 1
        </a>
        <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
      </li>

      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 2
        </a>
        <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
      </li>
      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="hover:text-primary-hover text-primary-main dark:text-sky-300 dark:hover:text-sky-400"
        >
          Page 3
        </a>
      </li>
    </ul>
  );
};

export const SlashBreadcrumbs = () => {
  return (
    <ul class="flex items-center">
      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="text-neutral-400 hover:text-primary-hover dark:hover:text-sky-400 transition-all"
        >
          <HomeIcon className="icon24" />
        </a>
        <span className="mx-3 text-neutral-400">/</span>
      </li>

      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 1
        </a>
        <span className="mx-3 text-neutral-400">/</span>
      </li>

      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="text-neutral-600 hover:text-primary-hover dark:text-neutral-300 dark:hover:text-sky-400"
        >
          Page 2
        </a>
        <span className="mx-3 text-neutral-400">/</span>
      </li>
      <li class="inline-flex items-center">
        <a
          href="#/breadcrumbs"
          class="hover:text-primary-hover text-primary-main dark:text-sk4 dark:hover:text-sky-400"
        >
          Page 3
        </a>
      </li>
    </ul>
  );
};

export const SolidBgBreadcrumbs = () => {
  return (
    <div className="bg-white py-2 px-4 box-border border border-primary-border rounded-lg shadow">
      <ul class="flex items-center">
        <li class="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            class="text-neutral-400 hover:text-primary-hover transition-all"
          >
            <HomeIcon className="icon24" />
          </a>
          <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
        </li>

        <li class="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            class="text-neutral-600 hover:text-primary-hover"
          >
            Page 1
          </a>
          <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
        </li>

        <li class="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            class="text-neutral-600 hover:text-primary-hover"
          >
            Page 2
          </a>
          <ChevronRightIcon className="icon16 mx-2 text-neutral-400" />
        </li>
        <li class="inline-flex items-center">
          <a
            href="#/breadcrumbs"
            class="hover:text-primary-hover text-primary-main"
          >
            Page 3
          </a>
        </li>
      </ul>
    </div>
  );
};
