import { Tab } from "@headlessui/react";
import React from "react";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const TabWithBg = () => {
  return (
    <div className="bg-primary-surface border-primary-border box-border flex w-full flex-wrap sm:flex-nowrap space-x-1 rounded-xl border p-1">
      <button className="bg-primary-main ring-primary-focused rounded-lg py-2 px-4 sm:w-full text-sm font-medium text-white ring-offset-2 transition-all focus:outline-none focus:ring-4">
        Dashboard
      </button>
      <button className="hover:bg-primary-border ring-primary-focused rounded-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        Profile
      </button>
      <button className="hover:bg-primary-border ring-primary-focused rounded-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        Transaction
      </button>
      <button className="hover:bg-primary-border ring-primary-focused rounded-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        History
      </button>
      <button className="hover:bg-primary-border ring-primary-focused rounded-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        Settings
      </button>
    </div>
  );
};

export const RoundedTopTab = () => {
  return (
    <div className="box-border flex flex-wrap sm:flex-nowrap w-full space-y-1 space-x-1 border-b border-neutral-300">
      <button className="bg-primary-main ring-primary-focused rounded-tl-lg rounded-tr-lg py-2 px-4 sm:w-full text-sm font-medium text-white ring-offset-2 transition-all focus:outline-none focus:ring-4">
        Dashboard
      </button>
      <button className="hover:bg-primary-border bg-primary-surface ring-primary-focused rounded-tl-lg rounded-tr-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        Profile
      </button>
      <button className="hover:bg-primary-border bg-primary-surface ring-primary-focused rounded-tl-lg rounded-tr-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        Transaction
      </button>
      <button className="hover:bg-primary-border bg-primary-surface ring-primary-focused rounded-tl-lg rounded-tr-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        History
      </button>
      <button className="hover:bg-primary-border bg-primary-surface ring-primary-focused rounded-tl-lg rounded-tr-lg py-2 px-4 sm:w-full text-sm font-medium text-neutral-600 ring-offset-2 transition-all hover:text-neutral-900 focus:outline-none focus:ring-4">
        Settings
      </button>
    </div>
  );
};

export const UnderlineTab = () => {
  return (
    <div className="flex flex-wrap w-full border-b border-neutral-300">
      <button className="py-2 px-4 text-sm font-medium text-primary-main box-border border-b-2 border-current ring-offset-2 transition-all focus:outline-none">
        Dashboard
      </button>
      <button className="py-2 px-4 text-sm font-medium text-neutral-600 box-border border-b-2 border-transparent ring-offset-2 transition-all focus:outline-none hover:box-border hover:text-primary-main">
        Profile
      </button>
      <button className="py-2 px-4 text-sm font-medium text-neutral-600 box-border border-b-2 border-transparent ring-offset-2 transition-all focus:outline-none hover:box-border hover:text-primary-main">
        Transaction
      </button>
      <button className="py-2 px-4 text-sm font-medium text-neutral-600 box-border border-b-2 border-transparent ring-offset-2 transition-all focus:outline-none hover:box-border hover:text-primary-main">
        History
      </button>
      <button className="py-2 px-4 text-sm font-medium text-neutral-600 box-border border-b-2 border-transparent ring-offset-2 transition-all focus:outline-none hover:box-border hover:text-primary-main">
        Settings
      </button>
    </div>
  );
};

export const InteractiveTab = () => {
  const [categories] = useState({
    Recent: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full max-w-md sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-primary-surface p-1 box-border border border-primary-border">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2 text-sm font-medium transition-all",
                  "ring-primary-focused ring-offset-2 focus:outline-none focus:ring-4",
                  selected
                    ? "bg-primary-main text-white"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-primary-border"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                "rounded-xl bg-primary-white box-border border border-primary-border p-3 text",
                "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-4"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-lg p-3 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    <h6 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {post.title}
                    </h6>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal text-neutral-600 dark:text-neutral-300">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount}</li>
                    </ul>
                    <a href="#/tabs" className={classNames("absolute inset-0 rounded-lg", "ring-primary-focused focus:z-10 focus:outline-none focus:ring-4")}> </a>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
