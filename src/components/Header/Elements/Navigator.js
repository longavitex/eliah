import Link from "next/link";
import classNames from "classnames";

import menuData from "@/data/header/navigation.json";

export default function Navigator({ disableSubmenu, className }) {
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title === "Home") {
        return (
          <li className="relative" key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>
                {item.title}
                <span className="dropable-icon">
                  <i className="fas fa-angle-down"></i>
                </span>
              </span>
            </Link>
            <ul className="dropdown-menu">
              {item.subMenu.map((i, index) => (
                <li key={index}>
                  <Link href={i.to}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        );
      }
      if (item.title === "Shop") {
        return (
          <li key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>
                {item.title}
                <span className="dropable-icon">
                  <i className="fas fa-angle-down"></i>
                </span>
              </span>
            </Link>
            <ul className="dropdown-menu -wide">
              <ul className="dropdown-menu__col">
                {item.subMenu.slice(0, 4).map((i, index) => (
                  <li key={index}>
                    <Link href={process.env.PUBLIC_URL + i.to}>
                      <span>{i.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="dropdown-menu__col">
                {item.subMenu.slice(4, 8).map((i, index) => (
                  <li key={index}>
                    <Link href={process.env.PUBLIC_URL + i.to}>
                      <span>{i.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="dropdown-menu__col">
                {item.subMenu.slice(8).map((i, index) => (
                  <li key={index}>
                    <Link href={process.env.PUBLIC_URL + i.to}>
                      <span>{i.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="dropdown-menu__col -banner">
                <Link href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}>
                  <span>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/header/dropdown-menu-banner.png"
                      }
                      alt="New product banner"
                    />
                  </span>
                </Link>
              </ul>
            </ul>
          </li>
        );
      }
      return (
        <li key={index}>
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>{item.title}</span>
          </Link>
        </li>
      );
    });
  }
  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
