import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Sidebar = (param) => {
  let key = 0;
  const menus = [
    {
      category: "getting started",
      listMenu: [
        ["introduction", "/intro"],
        ["documentation", "/documentation"],
      ],
    },
    {
      category: "component",
      listMenu: [
        ["typography", "/typography"],
        ["color", "/colors"],
        ["button", "/buttons"],
      ],
    },
  ];

  return (
    <aside
      className={`${ param.isShow ? "origin-left ease-in-out duration-300 delay-300 left-0" : "-left-full" } md:left-0`}
    >
      <div className="close-menu">
        <XMarkIcon />
      </div>
      <ul>
        {menus.map((menu) => (
          <li key={(key += 1)}>
            <h6>{menu.category}</h6>
            <ul>
              {menu.listMenu.map(([title, url]) => (
                <li key={(key += 1)}>
                  <NavLink
                    to={url}
                    className="menu-item"
                    category={menu.category}
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
