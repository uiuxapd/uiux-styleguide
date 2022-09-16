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
      if (e.target.classList.contains('search-popup')) {
        setIsShow(false)
      }
    }
  }, [isDark, isShow]);

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
            <MagnifyingGlassIcon />
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
      {isShow ? <Search /> : ""}
    </nav>
  );
};

export default Header;
