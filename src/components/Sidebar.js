import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  let key = 0;
  const menus = [
    {
      category: "getting started",
      listMenu: [
        ["introduction", "/introduction"],
        ["documentation", "/documentation"],
      ],
    },
    {
      category: "component",
      listMenu: [
        ["alerts", "/alerts"],
        ["buttons", "/buttons"],
        ["colors", "/colors"],
        ["progressbar", "/progressbar"],
        ["typography", "/typography"],
        ["table", "/tables"],
        ["steps", "/steps"],
      ],
    },
  ];

  return (
    <aside>
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
