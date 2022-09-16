import React, { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import Search from "./Search";

const Header = () => {
  let [isDark, setIsDark] = useState(false);
  let [isShow, setIsShow] = useState(false);

  useEffect(() => {
    // Dark Mode
    const body = document.querySelector("body");
    const darkMode = document.querySelector(".dark-mode-btn");
    darkMode.onclick = () => {
      setIsDark(!isDark);
      body.classList.toggle("dark");
    };

    // Breadcrumbs
    const currentMenu = document.querySelector(".menu-item.active");
    const breadcrumbs = document.querySelector(".breadcrumbs");
    const categoryText = document.querySelector(".category");
    const pageText = document.querySelector(".page");

    if (currentMenu) {
      categoryText.innerHTML = currentMenu.getAttribute("category");
      pageText.innerHTML = currentMenu.textContent;
      breadcrumbs.classList.remove("hidden");
    }

    if (!currentMenu) {
      breadcrumbs.classList.add("hidden");
    }

    // Search
    const btnSearch = document.querySelector(".search");
    btnSearch.onclick = () => {
      setIsShow(true);
    };

    document.onclick = (e) => {
      if (e.target.classList.contains('search-wrapper')) {
        setIsShow(false)
      }
    }
  }, [isDark, isShow]);

  return (
    <nav className="border-b border-primary/10 sticky top-0 z-10">
      <div className="container px-4 h-16 max-w-full flex justify-between items-center bg-white/20 backdrop-blur-sm dark:bg-slate-900/20 md:px-6 lg:px-10">
        <div className="text-l font-bold flex items-center dark:text-white">
          UI/UIX Styleguide
          <div className="ml-3 text-xs leading-5 font-normal text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20 gap-1">
            made with love <span className="text-red-500 animate-pulse">❤</span>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="cursor-pointer border-r border-primary/10 pr-4 search">
            <MagnifyingGlassIcon className="text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary h-6 w-6" />
          </div>
          <div className="w-6 h-6 overflow-hidden relative cursor-pointer dark-mode-btn">
            <SunIcon
              className={`absolute text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary h-6 w-6 ease-in-out duration-300 delay-200 ${
                isDark ? "left-0" : "-left-full"
              }`}
            />
            <MoonIcon
              className={`absolute text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary h-6 w-6 ease-in-out duration-300 delay-200 ${
                isDark ? "-right-full" : "right-0"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="container px-4 max-w-full h-12 flex items-center gap-2 sticky top-16 bg-white/20 backdrop-blur-sm dark:bg-slate-900/20 before:absolute before:h-[1px] before:top-0 before:inset-x-4 before:bg-primary/10 md:hidden">
        <div className="menu-button p-1 cursor-pointer">
          <Bars3Icon className="text-slate-900 dark:text-white hover:text-primary h-[18px] w-[18px]" />
        </div>
        <div className="flex items-center gap-1 text-sm capitalize breadcrumbs">
          <span className="text-slate-400 category"></span>
          <ChevronRightIcon className="h-3 w-3 text-slate-400" />
          <span className="text-primary page"></span>
        </div>
      </div>
      {isShow ? <Search /> : ""}
    </nav>
  );
};

export default Header;
