import React, { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/uiux-logo.svg";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/introduction">
          <div className="flex gap-2 mr-4">
            <img src={logo} alt="UI/UX Logo" className="h-12" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-normal text-[#222D51] dark:text-white translate-y-1">
                uiux
              </span>
              <span className="text-xs font-bold text-[#A8A8A8]">IT APD</span>
            </div>
          </div>
          </NavLink>
          <div className="tagline">
            made with love <span>❤</span>
          </div>
        </div>
        <div className="header-action">
          <div className="search">
            <MagnifyingGlassIcon className="stroke-neutral-600 dark:stroke-neutral-300" />
          </div>
          <div className="dark-mode-btn">
            <SunIcon className={`${isDark ? "left-0" : "-left-full"}`} />
            <MoonIcon className={`${isDark ? "-right-full" : "right-0"}`} />
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
