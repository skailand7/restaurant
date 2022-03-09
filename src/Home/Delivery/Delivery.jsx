import React from "react";

const Delivery = () => {
  return (
    <section className="lg:flex p-4">
      <div className="bg-yellow-200 flex justify-center items-center px-4 m-4 rounded-2xl lg:w-1/2">
        <div className="w-1/2 space-y-4 flex flex-col items-center">
          <p className="text-xl text-center font-bold">
            El delivery mas <span className="text-red-700">rapido</span>!
          </p>
          <button className="bg-red-700 text-white text-lg w-4/5 h-auto p-4 rounded-full">
            Pide Ya
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.vexels.com/media/users/3/199964/isolated/preview/ae782cab8ae7e722febb5869c09574cc-feliz-personaje-de-repartidor.png"
            alt=""
            className=""
          />
        </div>
      </div>
      <div className="p-4 font-bold text-gray-800 space-y-4 lg:w-1/2">
        <p className="text-xl">Nos encontramos aqui:</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5017937025755!2d-71.53798163764066!3d-16.39932234355334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc419f49d1f9cd270!2sPlaza%20de%20Armas%20de%20Arequipa!5e0!3m2!1ses-419!2spe!4v1646783015670!5m2!1ses-419!2spe"
          className="w-full h-4/5 border-0"
        ></iframe>
      </div>
    </section>
  );
};

export { Delivery };
