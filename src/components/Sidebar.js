import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Sidebar = (param) => {
  let key = 0;
  const menus = [
    {
      category: "getting started",
      listMenu: [
        ["Introduction", "/intro"],
        ["Documents", "/docs"],
        ["Components", "/component"],
      ],
    },
    {
      category: "component",
      listMenu: [
        ["Introduction", "/intro"],
        ["Documents", "/docs"],
        ["Components", "/component"],
      ],
    },
  ];

  return (
    <aside
      className={`w-3/4 h-full px-4 py-14 bg-white dark:bg-slate-800 relative ${param.isShow ? "origin-left ease-in-out duration-300 delay-300 left-0" : "-left-full"} md:w-[260px] md:left-0 md:px-6 md:py-10 lg:px-10`}
    >
      <div className="absolute right-4 top-4 cursor-pointer close-menu md:hidden">
        <XMarkIcon className="h-6 w-6 text-current hover:text-primary" />
      </div>
      <ul>
        {menus.map((menu) => (
          <li key={key += 1} className="mb-6 relative before:w-[1px] before:bg-slate-200 dark:before:bg-slate-700 before:absolute before:top-1 before:bottom-0 before:left-1">
            <h6 className="text-xs uppercase mb-2 flex items-center gap-2 before:w-2 before:h-2 before:bg-slate-200 dark:before:bg-slate-700 before:rounded-full">
              {menu.category}
            </h6>
            <ul>
              {menu.listMenu.map(([title, url]) => (
                <li key={key += 1} >
                  <NavLink
                    to={url}
                    className="menu-item h-10 w-full flex items-center px-5 relative before:absolute before:top-0 before:left-[3px] before:w-[3px] before:h-10 before:bg-primary before:hidden hover:before:block dark:text-white"
                    dataCategory={menu.category}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
