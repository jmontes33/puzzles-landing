"use client";
import Image from "next/image";
import React, { useState } from "react";

const products = [
  {
    image: "/product-1.png",
    name: 1,
  },
  {
    image: "/product-2.png",
    name: 2,
  },
  {
    image: "/product-3.png",
    name: 3,
  },
  {
    image: "/product-4.png",
    name: 4,
  },
  {
    image: "/product-5.png",
    name: 5,
  },
  {
    image: "/product-6.png",
    name: 6,
  },
];

function Products() {
  const [active, setActive] = useState(0);

  const handleClick = (name: number) => {
    setActive(name);
  };

  const closeImage = () => {
    setActive(0);
  };

  const previousProduct = () => {
    setActive(active - 1);
  };

  const nextProduct = () => {
    setActive(active + 1);
  };

  return (
    <div className="w-[80%] m-auto mb-10 " id="productos">
      <h1 className="text-center font-bold text-5xl m-16">Productos</h1>
      <div className="grid grid-cols-2 gap-16">
        {products.map((item) => (
          <Image
            className="m-auto cursor-pointer shadow-lg"
            src={item.image}
            alt="wood-product"
            height={400}
            width={400}
            onClick={() => handleClick(item.name)}
          />
        ))}
      </div>
      {products.map((item) => (
        <div
          className={
            item.name === active
              ? "fixed top-0 left-0 flex justify-between px-16 items-center h-screen w-screen bg-black bg-opacity-50"
              : "hidden"
          }
        >
          <button
            onClick={() => closeImage()}
            className="fixed top-16 right-16 font-bold text-2xl border-2 border-white px-3 py-1 hover:bg-white transition-all"
          >
            X
          </button>
          <p
            onClick={() => previousProduct()}
            className="text-2xl cursor-pointer hover:bg-[#6D310E] transition-all bg-[#806D51] text-white py-3 px-5 rounded-[50px]"
          >
            Anterior
          </p>
          <div
            className={
              item.name === active
                ? "flex fixed left-[25vw] top-[23vw] bg-slate-500"
                : "hidden"
            }
          >
            <Image
              src={item.image}
              alt="wood-product"
              width={600}
              height={100}
              className="shadow-2xl border-white border-2"
            />
          </div>
          <p
            onClick={() => nextProduct()}
            className="text-2xl cursor-pointer hover:bg-[#6D310E] transition-all bg-[#806D51] text-white py-3 px-5 rounded-[50px]"
          >
            Siguiente
          </p>
        </div>
      ))}
    </div>
  );
}

export default Products;
