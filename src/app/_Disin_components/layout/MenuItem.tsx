"use client";

import React from "react";
import { Link, usePathname } from "~/i18n/routing";

interface MenuItemProps {
  label: string;
  link: string;
  submenu?: { label: string; link: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ label, link, submenu }) => {
  const pathname = usePathname();
  const isActive = pathname == link;

  if (submenu) {
    return (
      <li className="nav-item" key={label}>
        <Link href={link} className="nav-link dropdown-toggle">
          {label}
        </Link>

        <ul className="dropdown-menu">
          {submenu.map((subItem) => {
            const isActive = pathname == subItem.link;
            return (
              <li className="nav-item" key={subItem.label}>
                <Link
                  href={subItem.link}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {subItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item" key={label}>
      <Link href={link} className={`nav-link ${isActive ? "active" : ""}`}>
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
