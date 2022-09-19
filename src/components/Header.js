import React, { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Dark Mode
    const body = document.querySelector("body");
    const darkMode = document.querySelector(".dark-mode-btn");
    darkMode.onclick = () => {
      setIsDark(!isDark);
      body.classList.toggle("dark");
    };
  }, [isDark]);

  return (
    <nav>
      <div className="header-top">
        <div className="logo-wrapper">
          UI/UIX Styleguide
          <div className="tagline">
            made with love <span>❤</span>
          </div>
        </div>
        <div className="header-action">
          <div className="search">
            <MagnifyingGlassIcon className="stroke-neutral-600 dark:stroke-neutral-300"/>
          </div>
          <div className="dark-mode-btn">
            <SunIcon className={`${isDark ? "left-0" : "-left-full"}`} />
            <MoonIcon className={`${isDark ? "-right-full" : "right-0"}`}/>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="menu-btn">
          <Bars3Icon />
        </div>
        <div className="breadcrumbs">
          <span className="text-slate-400 category"></span>
          <ChevronRightIcon className="h-3 w-3 text-slate-400" />
          <span className="text-primary page"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
