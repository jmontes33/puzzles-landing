import React from "react";
import Image from "next/image";

function History() {
  return (
    <div id="historia">
      <div className="hidden mt-[27vw] sm:flex flex-col w-[80%] items-center m-auto">
        <h1 className="text-center text-5xl font-bold mb-10">Mi Historia</h1>
        <div className="flex shadow-xl">
          <p className="w-[60%] bg-white p-10">
            Hoy en día esto se está perdiendo y nosotros queremos poner en valor
            todos los beneficios que tiene la madera a la hora de crear
            cualquier tipo de objeto, por eso no trabajamos con productos hechos
            en serie sino con productos hechos a mano adaptandonos a las
            necesidades de cada uno de nuestros clientes
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
      <div className="sm:hidden mt-[27vw] flex flex-col w-[80%] items-center m-auto">
        <h1 className="text-center text-3xl font-bold mb-4">Mi Historia</h1>
        <div className="flex flex-col shadow-xl">
          <p className="w-[100%] bg-white p-10">
            Hoy en día esto se está perdiendo y nosotros queremos poner en valor
            todos los beneficios que tiene la madera a la hora de crear
            cualquier tipo de objeto, por eso no trabajamos con productos hechos
            en serie sino con productos hechos a mano adaptandonos a las
            necesidades de cada uno de nuestros clientes
          </p>
          <Image
            className="w-[100%]"
            src={"/artesano.png"}
            alt="artesano-carpintero"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  );
}

export default History;
