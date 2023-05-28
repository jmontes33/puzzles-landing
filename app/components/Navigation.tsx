"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useState } from "react";

const links = [
  {
    label: "Inicio",
    link: true,
    path: "inicio",
  },
  {
    label: "Historia",
    link: false,
    path: "historia",
  },
  {
    label: "Productos",
    link: false,
    path: "productos",
  },
  {
    label: "Contacto",
    link: false,
    path: "contacto",
  },
];

function Navigation() {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (path: string) => {
    console.log("Esto funciona")
    setActiveLink(path);
  };

  return (
    <header className="w-[100%] m-auto z-10 relative">
      <div className="hidden md:flex justify-between">
        <div className="flex fixed top-8 left-1/2 transform -translate-x-1/2 bg-opacity-70 gap-3 bg-[#806D51] h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms]">
          {links.map(({ label, path }) => (
            <ScrollLink
              className="cursor-pointer"
              key={label}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleClick(path)}
            >
              <li
                className={
                  path === activeLink
                    ? "list-none text-white font-bold bg-[#6D310E] p-3 px-10 rounded-[50px]"
                    : "list-none text-white font-bold p-3 px-10"
                }
              >
                {label}
              </li>
            </ScrollLink>
          ))}
        </div>
      </div>
      <div className="md:hidden flex justify-between">
        <div className="flex fixed w-[350px] top-2 left-1/2 justify-center transform -translate-x-1/2 bg-opacity-70 gap-1 bg-[#806D51] h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms]">
          {links.map(({ label, path }) => (
            <ScrollLink
              className="cursor-pointer"
              key={label}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onSetActive={() => handleClick(path)}
            >
              <li
                className={
                  path === activeLink
                    ? "list-none text-white text-sm font-bold bg-[#6D310E] py-2 px-3 rounded-[50px]"
                    : "list-none text-white font-bold text-sm py-2 px-3"
                }
              >
                {label}
              </li>
            </ScrollLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
