import React, { useState, useEffect } from "react";
import {
  ChevronRightIcon,
  Bars2Icon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon
} from "@heroicons/react/24/outline";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body')
    const darkMode = document.querySelector(".dark-mode-btn");
    darkMode.onclick = () => {
      setIsDark(!isDark);
      body.classList.toggle("dark");
    };
  });

  return (
    <nav className="border-b border-primary/10">
      <div className="container px-4 h-16 max-w-full flex justify-between items-center sticky top-0 bg-white dark:bg-slate-800 md:px-6 lg:px-10">
        <div className="text-l font-bold dark:text-white">UI/UIX Styleguide</div>
        <div className="flex justify-between gap-2">
          <div className="p-1 cursor-pointer">
            <MagnifyingGlassIcon className="text-slate-800 dark:text-white hover:text-primary h-[18px] w-[18px]" />
          </div>
          <div className="p-1 cursor-pointer dark-mode-btn">
            {isDark ? <SunIcon className="text-slate-800 dark:text-white hover:text-primary h-[18px] w-[18px]" /> : <MoonIcon className="text-slate-800 dark:text-white hover:text-primary h-[18px] w-[18px]" />}       
          </div>
        </div>
      </div>
      <div className="container px-4 max-w-full h-12 flex items-center gap-2 sticky top-16 bg-white dark:bg-slate-800 before:absolute before:h-[1px] before:top-0 before:inset-x-4 before:bg-primary/10 md:hidden">
        <div className="menu-button p-1 cursor-pointer">
          <Bars2Icon className="text-slate-800 dark:text-white hover:text-primary h-[18px] w-[18px]" />
        </div>
        <div className="flex items-center gap-1 text-sm capitalize">
          <span className="text-slate-400">category</span>
          <ChevronRightIcon className="h-3 w-3 text-slate-400" />
          <span className="text-primary">category</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
