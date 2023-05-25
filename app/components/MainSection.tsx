import React from "react";
import Image from "next/image";

function MainSection() {

  return (
    <div id="#home" className="w-[100%] m-auto z-0">
        <Image className="absolute" src={"/banner.png"} alt="banner-puzzles" width={5000} height={100} />
        <div className="flex flex-col items-center justify-around relative bg-[#653727] opacity-[60%] w-[400px] h-[600px] rounded-2xl left-[7.32vw] top-[10.98vw]">
        <Image src={"/logoWhite.png"} alt="banner-puzzles" width={300} height={100} />
        <div>
            <p className="text-white text-center text-2xl font-bold">Para mi</p>
            <p className="text-white text-center text-2xl font-bold">la calidad no es una opción</p>
            <p className="text-white text-center text-2xl font-bold">es una necesidad</p>
        </div>
        <button className="text-white text-2xl border-4 py-2 px-5 rounded-[50px]">Contacto</button>
        </div>
    </div>
  );
}

export default MainSection;
