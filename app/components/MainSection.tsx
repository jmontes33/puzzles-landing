import React from "react";
import Image from "next/image";

function MainSection() {
  return (
    <div id="inicio" className="w-[100%] m-auto z-0">
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
          <p className="text-white text-center text-[2vw] font-bold">Para mi</p>
          <p className="text-white text-center text-[2vw] font-bold">
            la calidad no es una opción
          </p>
          <p className="text-white text-center text-[2vw] font-bold">
            es una necesidad
          </p>
        </div>
        <button className="text-white hover:px-8 transition-all  text-2xl border-4 py-2 px-5 rounded-[50px]">
          Contacto
        </button>
      </div>
    </div>
  );
}

export default MainSection;
