import React from "react";

const Header = () => {
  return (
    <nav className="hidden md:flex justify-between items-center w-full h-[60px] px-8">
      <div className="w-1/ flex items-center">
        <img
          src="https://www.graphicsprings.com/filestorage/stencils/eae46e87a570a08fd57605972626076c.png?width=500&height=500"
          alt=""
          className="h-20"
        />
        <p className="font-bold text-green-800">Tu Restaurant</p>
      </div>
      <ul className="flex justify-evenly w-3/5 hidden lg:flex">
        <li>
          <a className="hover:text-red-700 hover:font-bold" href="">
            UBICACION
          </a>
        </li>
        <li>
          <a className="hover:text-red-700 hover:font-bold" href="">
            MENU
          </a>
        </li>
        <li>
          <a className="hover:text-red-700 hover:font-bold" href="">
            NOSOTROS
          </a>
        </li>
        <li>
          <a className="hover:text-red-700 hover:font-bold" href="">
            CONTACTO
          </a>
        </li>
        <li>
          <a className="hover:text-red-700 hover:font-bold" href="">
            BUSCAR
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-evenly w-1/5 md:w-2/5 lg:w-1/5 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <a href="" className="hover:text-red-700 hover:font-bold">
          LOGIN
        </a>
        <button
          className="rounded-full ml-2 bg-red-700 w-auto h-3/5 px-4 py-1 flex items-center text-white font-bold hover:bg-red-600"
          type="button"
        >
          REGISTRO
        </button>
      </div>
    </nav>
  );
};

export { Header };
