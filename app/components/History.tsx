import React from "react";
import Image from "next/image";

function History() {
  return (
    <div className="mt-[27vw] w-[80%] m-auto" id="historia">
      <h1 className="text-center text-5xl font-bold mb-10">Mi Historia</h1>
      <div className="flex shadow-xl">
        <p className="w-[60%] bg-white p-10">
          Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem
          ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem
          ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum
          lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem
          ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem
          ipsum Lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum
          lorem ipsum Lorem ipsum lorem ipsum lorem ipsum
        </p>
        <Image
          className="w-[40%]"
          src={"/artesano.png"}
          alt="artesano-carpintero"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default History;
