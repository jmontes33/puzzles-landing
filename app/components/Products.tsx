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
    <div id="productos">
      <div className="hidden w-[100%] sm:flex flex-col items-center lg:mb-[20vw]">
        <h1 className="text-center font-bold text-5xl m-16">Productos</h1>
        <div className="grid grid-cols-2 gap-16 px-10">
          {products.map((item) => (
            <div key={item.name} className="drop-shadow-lg">
              <Image
                className="m-auto cursor-pointer shadow-lg rounded-lg"
                src={item.image}
                alt="wood-product"
                height={600}
                width={600}
              />
              <div
                onClick={() => handleClick(item.name)}
                className="absolute top-0 left-0 z-50 flex w-full h-full overflow-hidden transition duration-300 bg-black opacity-0 hover:opacity-40 rounded-lg"
              >
                <p className="flex items-center justify-center w-full h-full text-2xl font-semibold text-white cursor-pointer">
                  Ver
                </p>
              </div>
            </div>
          ))}
        </div>
        {products.map((item) => (
          <div
            key={item.name}
            className={
              item.name === active
                ? "fixed z-10 top-0 left-0 flex justify-between px-16 items-center h-screen w-screen bg-black bg-opacity-70"
                : "hidden"
            }
          >
            <div
              className={
                item.name === active
                  ? "flex fixed m-auto bg-slate-500"
                  : "hidden"
              }
            >
              <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
                <button
                  onClick={() => closeImage()}
                  className="fixed top-16 right-16 font-bold text-3xl px-3 py-1 text-white"
                >
                  X
                </button>
                <p
                  onClick={() => previousProduct()}
                  className="text-2xl font-bold mr-[15%] cursor-pointer hover:bg-[#6D310E] transition-all bg-[#806D51] text-white py-3 px-5 rounded-[50px]"
                >
                  {"<"}
                </p>
                <Image
                  src={item.image}
                  alt="wood-product"
                  width={800}
                  height={100}
                  className="drop-shadow-lg rounded-xl"
                />
                <p
                  onClick={() => nextProduct()}
                  className="text-2xl font-bold ml-[15%] cursor-pointer hover:bg-[#6D310E] transition-all bg-[#806D51] text-white py-3 px-5 rounded-[50px]"
                >
                  {">"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden w-[100%] flex flex-col items-center mb-4">
        <h1 className="text-center font-bold text-3xl my-4">Productos</h1>
        <div className="grid grid-cols-2 gap-4 px-10">
          {products.map((item) => (
            <div key={item.name} className="drop-shadow-lg">
              <Image
                className="m-auto cursor-pointer shadow-lg rounded-lg"
                src={item.image}
                alt="wood-product"
                height={600}
                width={600}
              />
              <div
                onClick={() => handleClick(item.name)}
                className="absolute top-0 left-0 z-50 flex w-full h-full overflow-hidden transition duration-300 bg-black opacity-0 hover:opacity-40 rounded-lg"
              >
                <p className="flex items-center justify-center w-full h-full text-2xl font-semibold text-white cursor-pointer">
                  Ver
                </p>
              </div>
            </div>
          ))}
        </div>
        {products.map((item) => (
          <div
            key={item.name}
            className={
              item.name === active
                ? "fixed z-10 top-0 left-0 flex justify-between px-16 items-center h-screen w-screen bg-black bg-opacity-70"
                : "hidden"
            }
          >
            <div
              className={
                item.name === active
                  ? "flex fixed m-auto bg-slate-500"
                  : "hidden"
              }
            >
              <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen">
                <button
                  onClick={() => closeImage()}
                  className="fixed top-48 right-8 font-bold text-3xl px-3 py-1 text-white"
                >
                  X
                </button>
                <p
                  onClick={() => previousProduct()}
                  className="text-2xl font-bold cursor-pointer hover:bg-[#6D310E] transition-all bg-[#806D51] text-white py-3 px-5 rounded-[50px]"
                >
                  {"<"}
                </p>
                <Image
                  src={item.image}
                  alt="wood-product"
                  width={800}
                  height={100}
                  className="drop-shadow-lg rounded-xl"
                />
                <p
                  onClick={() => nextProduct()}
                  className="text-2xl font-bold cursor-pointer hover:bg-[#6D310E] transition-all bg-[#806D51] text-white py-3 px-5 rounded-[50px]"
                >
                  {">"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
