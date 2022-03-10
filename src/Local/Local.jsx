import React from "react";

const Local = () => {
  const onCloseModal = () => {
    const modal = document.querySelector("#localModal");
    modal.classList.add("hidden");
  };

  return (
    <section
      id="localModal"
      className="hidden w-full h-full fixed top-0 left-0 bottom-0  lg:bg-black/90 flex justify-center z-30"
    >
      <div className="bg-slate-200 p-4 lg:w-[700px] lg:h-auto overflow-y-auto overscroll-contain opacity-100">
        <div className="relative">
          <div
            onClick={onCloseModal}
            className="w-8 h-8 flex items-center justify-center brightness-75 rounded-full bg-white absolute top-3 left-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <img
            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Local de Tu Restaurant"
            className="rounded-2xl"
          />
          <div className=" w-full h-8 px-4 absolute bottom-0 flex  justify-between text-white">
            <p className="font-bold">Tu Restaurante</p>
            <p className="text-sm ">Cierra a las 10:30 PM</p>
          </div>
        </div>
        <div className="mt-12 ">
          <div className="flex text-center bg-white py-6 rounded-xl">
            <div className="w-1/4 space-y-2">
              <p className="text-gray-500">Ratings</p>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p className="font-bold text-gray-800">4.9</p>
              </div>
            </div>
            <div className="w-2/4 space-y-2 border-l-2 border-r-2 border-solid border-gray-200">
              <p className="text-gray-500">Rubro</p>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-sky-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-bold text-gray-800">Restaurant</p>
              </div>
            </div>
            <div className="w-1/4 space-y-2">
              <p className="text-gray-500">Distance</p>
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-bold text-gray-800">2 KM</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-center bg-white py-6 rounded-xl p-4 mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-500 text-center ml-4">
              Para cuidarte contamos con todos los protocolos de salubridad .
            </p>
          </div>
          <div className="w-full text-left bg-white py-6 rounded-xl flex flex-col p-4 mt-4">
            <p className="font-bold">Tambien somos Pet Friendly! 🐶</p>
            <div className="w-auto h-68 items-center mt-6 overflow-x-auto flex space-x-1">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/4587991/pexels-photo-4587991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className=" h-60 rounded-xl"
                />
                <div className="w-48 text-center">
                  <p className="text-[.8rem]">Firulays en el local.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className=" h-60 rounded-xl"
                />
                <div className="w-48 text-center">
                  <p className="text-[.8rem]">Pepe festejando.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/11280984/pexels-photo-11280984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className=" h-60 rounded-xl"
                />
                <div className="w-48 text-center">
                  <p className="text-[.8rem]">Rosa y Cheems.</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/9354547/pexels-photo-9354547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                  className=" h-60 rounded-xl"
                />
                <div className="w-48 text-center">
                  <p className="text-[.8rem]">Bolt y su familia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Local };
