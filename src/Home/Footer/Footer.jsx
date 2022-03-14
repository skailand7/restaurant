import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="bg-cyan-900 h-auto p-8 flex flex-col">
        <p className="text-xl font-bold text-gray-300">Links utiles</p>
        <a href="" className="text-gray-300 text-md">
          Inicio
        </a>
        <a href="" className="text-gray-300 text-md">
          Nosotros
        </a>
        <a href="" className="text-gray-300 text-md">
          Servicios
        </a>
        <a href="" className="text-gray-300 text-md">
          Trabaja con nosotros
        </a>
        <div className="space-y-2">
          <p className="text-xl font-bold text-gray-300 mt-4">Contactanos</p>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="tu-email@ejemplo.com"
              className="w-2/3 rounded-lg px-2"
            />
            <button className="1/3 bg-black text-white rounded-xl p-2">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer };
