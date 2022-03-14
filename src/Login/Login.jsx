import React from "react";

const Login = () => {
  return (
    <section className="h-screen w-full  p-12 flex justify-center relative">
      <div className="w-full h-full lg:w-[450px] grid place-items-center">
        <div className="w-full flex justify-center items-center">
          <img
            src="https://www.graphicsprings.com/filestorage/stencils/eae46e87a570a08fd57605972626076c.png?width=500&height=500"
            alt=""
            className="h-28"
          />
          <p className="font-bold text-2xl text-green-800">Tu Restaurant</p>
        </div>
        <div className="self-center space-y-4">
          <p className="text-xl text-gray-700">Usuario</p>
          <input
            type="text"
            placeholder="Ejemplo1"
            className="w-full h-8 border-2 border-gray-500 rounded-full p-4"
          />
          <p className="text-xl text-gray-700">Contrasena</p>
          <input
            type="password"
            placeholder="Escribe aqui..."
            className="w-full h-8 border-2 border-gray-500 rounded-full p-4"
          />
        </div>
        <div className="self-end space-y-8">
          <div className="flex flex-col space-y-4">
            <button className="w-full h-16 text-md bg-white rounded-full border-2 border-gray-700 text-gray-700">
              Iniciar sesion
            </button>
            <button className="w-full h-16 text-md bg-blue-600 rounded-full border-2 border-blue-700 text-white">
              Iniciar con Facebook
            </button>
          </div>
          <div>
            <p className="font-bold">
              No tienes una cuenta?{" "}
              <a href="/" className="text-red-700">
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute top-8 left-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
    </section>
  );
};

export { Login };
