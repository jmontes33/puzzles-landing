"use client";
import React from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

function MainSection() {
  return (
    <div id="inicio">
      <div  className="hidden sm:flex w-[100%] m-auto z-0">
        <Image
          className="absolute"
          src={"/banner.png"}
          alt="banner-puzzles"
          width={2000}
          height={100}
        />
        <div className="flex flex-col justify-around items-center relative bg-opacity-60 bg-customColor w-[30vw] h-[40vw] rounded-2xl left-[7.32vw] p-5 top-[11vw]">
          <Image
            src={"/logoWhite.png"}
            alt="banner-puzzles"
            width={250}
            height={100}
          />
          <div>
            <p className="text-white text-center text-[2vw] font-bold">
              Para mi
            </p>
            <p className="text-white text-center text-[2vw] font-bold">
              la calidad no es una opción
            </p>
            <p className="text-white text-center text-[2vw] font-bold">
              es una necesidad
            </p>
          </div>
          <ScrollLink
            to="contacto"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="text-white hover:px-8 transition-all  text-2xl border-4 py-2 px-5 rounded-[50px]">
              Contacto
            </button>
          </ScrollLink>
        </div>
      </div>
      <div className="sm:hidden w-[100%] m-auto z-0">
        <Image
          className="absolute"
          src={"/banner.png"}
          alt="banner-puzzles"
          width={2000}
          height={100}
        />
        <div className="flex flex-col gap-4 items-center relative bg-opacity-60 bg-customColor w-[40vw] h-[40vw] rounded-2xl left-[7.32vw] top-[20vw]">
          <Image
            src={"/logoWhite.png"}
            alt="banner-puzzles"
            width={100}
            height={100}
          />
          <div>
            <p className="text-white text-center text-[10px] font-bold">
              Para mi
            </p>
            <p className="text-white text-center text-[10px] font-bold">
              la calidad no es una opción
            </p>
            <p className="text-white text-center text-[10px] font-bold">
              es una necesidad
            </p>
          </div>
          <ScrollLink
            to="contacto"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="text-white transition-all border-2 text-xs py-1 px-2 rounded-[50px]">
              Contacto
            </button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
