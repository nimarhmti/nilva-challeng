import React, { useState } from "react";
import Style from "./Navbar.module.css";
import { routes, routesModel } from "../../config/routes";
export const Navbar = () => {
  const [active, setActive] = useState<string>("0");

  const navItemHandler = (item: routesModel) => (
    <li
      className={`${Style.dFlex}`}
      key={item.id}
      id={item.id}
      onClick={() => setActive(item.id)}
    >
      <a
        className={`${Style.dFlex} ${Style.singleNavItem} ${
          active == item.id ? Style.activeItem : null
        }`}
        href={item.path}
      >
        <>{item.icon}</>
        {item.label}
      </a>
    </li>
  );
  return (
    <nav className={`${Style.dFlex} ${Style.navbar}`}>
      <ul className={`${Style.dFlex}`}>{routes.map(navItemHandler)}</ul>
    </nav>
  );
};
