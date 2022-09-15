import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <nav>
      <div className="container px-4 h-16 max-w-full flex justify-between items-center sticky top-0 border-b border-slate-200 bg-white md:px-6 lg:px-10">
        <div className="menu-button p-1 bg-slate-50 rounded-full border border-slate-200 cursor-pointer md:hidden">
          <Bars3Icon className="text-slate-800 hover:text-primary h-[18px] w-[18px]" />
        </div>
        <div className="text-l font-bold absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
          UI/UIX Styleguide
        </div>
        <div className="flex justify-between gap-2">
          <div className="p-1 bg-slate-50 rounded-full border border-slate-200 cursor-pointer">
            <MagnifyingGlassIcon className="text-slate-800 hover:text-primary h-[18px] w-[18px]" />
          </div>
          <div className="p-1 bg-slate-50 rounded-full border border-slate-200 cursor-pointer">
            <SunIcon className="text-slate-800 hover:text-primary h-[18px] w-[18px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
