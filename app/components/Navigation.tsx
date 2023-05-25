"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "Inicio",
    link: true,
  },
  {
    label: "Historia",
    link: false,
  },
  {
    label: "Productos",
    link: false,
  },
  {
    label: "Contacto",
    link: false,
  },
];

function Navigation() {
  const [active, setActive] = useState(links);

  const handleClick = (label: string) => {
    const updateLink = active.map((link) => {
      if (link.label === label) {
        return { ...link, link: true };
      } else {
        return { ...link, link: false };
      }
    });
    setActive(updateLink);
  };

  return (
    <header className="w-[80%] m-auto z-10 relative">
      <div className="hidden md:flex justify-between ">
        <Image src={"/logo.png"} alt="web-logo" width={100} height={100} />
        <div className="flex fixed top-3 left-1/2 transform -translate-x-1/2 gap-3 bg-[#806D51] h-16 items-center p-2 rounded-[50px] transition-all duration-[500ms]">
          {active.map(({ label, link }) => (
            <Link key={label} href="">
              <li
                onClick={() => handleClick(label)}
                className={
                  link
                    ? "list-none text-white font-bold bg-[#6D310E] p-3 px-10 rounded-[50px]"
                    : "list-none text-white font-bold p-3 px-10"
                }
              >
                {label}
              </li>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
