"use client";

import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { Menus } from "~/constants/menus";
import Image from "next/image";
import LanguageSwitcher from "~/app/_Disin_components/layout/LanguageSwitcher";
import { Link, usePathname } from "~/i18n/routing";

// Custom hook for media query
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  const pathname = usePathname();

  useEffect(() => {
    const elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    });
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !menu && toggleNavbar();
  }, [pathname]);

  // Check if screen width is at least 767px , 1199, 991
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1199px)");

  // Logo should change for medium screens (between 767px and 1199px)
  const shouldShowMainLogo = isMobile || isLargeDesktop;

  // Set logo source based on screen size
  const logoSrc = shouldShowMainLogo
    ? "https://x41q9wll8l.ufs.sh/f/kPqN7718CWlu2JVMoX3aYOs6XAhJVHKowrlz1WfdjyPxt0Ic"
    : "https://x41q9wll8l.ufs.sh/f/kPqN7718CWluOKOekRNNgi3eV0yDv2z7lICnRwBfZLqj5t8r";

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <div className={`logoContainer`}>
                <Link href="/" className="navbar-brand">
                  <Image src={logoSrc} alt="logo" width={220} height={50} />
                </Link>
              </div>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {Menus().map((menuItem) => (
                    <MenuItem key={menuItem.label} {...menuItem} />
                  ))}
                </ul>
              </div>

              <div className={`${classOne} languageSwitcherContainer`}>
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
