import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <div id="contacto">
      <div className="hidden w-[100%] m-auto z-0 sm:flex items-center justify-end">
        <Image
          src={"/final2.png"}
          alt="wine-and-wood"
          width={2000}
          height={100}
          className="absolute"
        />
        <div className="flex flex-col relative bg-opacity-60 gap-5 bg-customColor w-[40%] h-[30%] rounded-2xl p-8 mr-24">
          <h1 className="text-white text-center text-5xl font-bold">
            Contacto
          </h1>
          <p className="text-white">
            Hago todos los pedidos a medida y con las características que el
            cliente quiere, así que no dudes en contactar conmigo mediante
            llamada, whatsapp, o correo electrónico.
          </p>
          <div className="flex items-center gap-5">
            <Image
              src={"/telephone-svgrepo-com 1.png"}
              alt="telephone"
              width={40}
              height={100}
            />
            <p className="text-white font-bold text-xl">629 30 47 84</p>
          </div>
          <div>
            <div className="flex items-center gap-5">
              <Image
                src={"/mail-right-arrow-svgrepo-com 1.png"}
                alt="mail"
                width={40}
                height={100}
              />
              <p className="text-white font-bold text-xl">Envíame un correo</p>
            </div>
            <form className="flex flex-col gap-5 w-[85%] ml-[4.5vw] items-center">
              <input
                type="text"
                placeholder="Tu email"
                className="bg-[#DA7C5C] text-white placeholder-white px-3 py-2 rounded-[50px] w-full"
              />
              <textarea
                placeholder="Tu mensaje"
                className="bg-[#DA7C5C] text-white placeholder-white px-3 py-2 rounded-[10px] h-[10vw] w-full"
              />
              <input
                type="submit"
                value="Enviar"
                className="bg-[#DA7C5C] w-[50%] px-3 py-2 rounded-[50px] text-white font-bold text-xl hover:bg-[#6D310E] transition-all cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <h1 className="sm:hidden text-center text-3xl font-bold py-4">
        Contacto
      </h1>
      <div className="sm:hidden w-[100%] z-0 flex px-9 mb-5">
        <div className="flex flex-col bg-opacity-60 gap-5 bg-customColor p-3 rounded-2xl">
          <p className="text-white text-lg text-center">
            Hago todos los pedidos a medida y con las características que el
            cliente quiere, así que no dudes en contactar conmigo mediante
            llamada, whatsapp, o correo electrónico.
          </p>
          <div className="flex items-center gap-5">
            <Image
              src={"/telephone-svgrepo-com 1.png"}
              alt="telephone"
              width={30}
              height={100}
            />
            <p className="text-white font-bold text-lg">629 30 47 84</p>
          </div>
          <div>
            <div className="flex items-center gap-5 mb-5">
              <Image
                src={"/mail-right-arrow-svgrepo-com 1.png"}
                alt="mail"
                width={30}
                height={100}
              />
              <p className="text-white font-bold text-lg">Envíame un correo</p>
            </div>
            <form className="flex flex-col gap-5 w-[85%] ml-[4.5vw] items-center">
              <input
                type="text"
                placeholder="Tu email"
                className="bg-[#DA7C5C] text-white placeholder-white px-3 py-1 rounded-[50px] w-full"
              />
              <textarea
                placeholder="Tu mensaje"
                className="bg-[#DA7C5C] text-white placeholder-white px-3 py-2 rounded-[10px] h-[10vw] w-full"
              />
              <input
                type="submit"
                value="Enviar"
                className="bg-[#DA7C5C] w-[50%] px-3 py-2 rounded-[50px] text-white font-bold text-xl hover:bg-[#6D310E] transition-all cursor-pointer"
              />
            </form>
          </div>{" "}
        </div>
      </div>
      <Image
        src={"/final2.png"}
        alt="wine-and-wood"
        width={2000}
        height={100}
      />
    </div>
  );
}

export default Contact;
