"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    label: "Inicio",
  },
  {
    label: "Historia",
  },
  {
    label: "Productos",
  },
  {
    label: "Contacto",
  },
];

function Navigation() {

    const [active, setActive] = useState<boolean>(true)

  return (
    <header className="w-[80%] m-auto">
      <div className="hidden md:flex justify-between ">
        <Image src={"/logo.png"} alt="web-logo" width={100} height={100} />
        <div className="flex fixed top-3 left-1/2 transform -translate-x-1/2 gap-10 bg-[#806D51] h-16 items-center px-8">
          {links.map(({ label }) => (
            <Link key={label} href={""}>
              <li className="list-none text-white font-bold">{label}</li>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
