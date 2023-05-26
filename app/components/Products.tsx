import Image from "next/image";
import React from "react";

const products = [
  {
    image: "/product-1.png",
  },
  {
    image: "/product-2.png",
  },
  {
    image: "/product-3.png",
  },
  {
    image: "/product-4.png",
  },
  {
    image: "/product-5.png",
  },
  {
    image: "/product-6.png",
  },
];

function Products() {
  return (
    <div className="w-[80%] m-auto mb-10">
      <h1 className="text-center font-bold text-5xl m-16">Productos</h1>
      <div className="grid grid-cols-2 gap-16">
        {products.map((item) => (
          <Image className="m-auto" src={item.image} alt="wood-product" height={400} width={400} />
        ))}
      </div>
    </div>
  );
}

export default Products;
