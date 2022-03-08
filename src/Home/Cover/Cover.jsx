import React from "react";

const Cover = () => {
  return (
    <section>
      <div className="h-auto w-full lg:h-[500px] p-0  relative flex justify-center lg:justify-start">
        <img
          src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="h-full bg-cover bg-center brightness-[.35] md:hidden lg:hidden"
        />
        <img
          src="https://images.pexels.com/photos/5531301/pexels-photo-5531301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="hidden w-full object-cover md:block lg:block brightness-[.25]"
        />
        <p className="text-3xl md:left-16 md:text-left md:text-[2rem] lg:text-[3rem] lg:tracking-widest lg:leading-tight font-bold text-center text-white absolute bottom-52 md:bottom-72 md:uppercase lg:text-left  lg:w-1/3">
          Best food <br />
          for your taste
        </p>
        <p className="hidden md:block text-white absolute bottom-48 md:bottom-40 lg:bottom-48 md:text-left md:left-16 md:w-1/3">
          La mejor atencion y servicio para brindarte la mejor experiencia
          culinaria, contamos con aperitivos, platos de fondo, postres y
          bebidas!
        </p>
        <button
          className="rounded-full  bg-red-700 w-auto px-8 py-4 flex items-center text-white font-bold hover:bg-red-600 absolute bottom-24 md:left-16"
          type="button"
        >
          VER CARTA
        </button>
      </div>
    </section>
  );
};

export { Cover };
