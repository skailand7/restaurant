import React from "react";

const Sections = () => {
  return (
    <section className="">
      <div className="px-8 py-4">
        <p className="font-bold text-gray-800 text-xl mb-8">Tambien puedes:</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
          <div className="space-y-4 w-full h-40 flex flex-col items-center justify-center border-gray-300 border-4 rounded-xl text-gray-500 hover:text-red-700 hover:border-red-700 hover:bg-red-300">
            <p className="text-center text-lg font-bold">Reservar</p>
            <img
              src="https://cdn-icons.flaticon.com/png/512/2060/premium/2060751.png?token=exp=1646785865~hmac=7ec15bda7835ab8c0ef16cbc64917568"
              alt=""
              className="h-8"
            />
          </div>
          <div className="space-y-4 w-full h-40 flex flex-col items-center justify-center border-gray-300 border-4 rounded-xl text-gray-500 hover:text-red-700 hover:border-red-700 hover:bg-red-300">
            <p className="text-center text-lg font-bold">Pedir un plato</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
              alt=""
              className="h-10"
            />
          </div>
          <div className="space-y-4 w-full h-40 flex flex-col items-center justify-center border-gray-300 border-4 rounded-xl text-gray-500 hover:text-red-700 hover:border-red-700 hover:bg-red-300">
            <p className="text-center text-lg font-bold">Cumpleanos</p>
            <img
              src="https://cdn-icons.flaticon.com/png/512/1001/premium/1001932.png?token=exp=1646786131~hmac=469ef451156c542abaf23bfb86d2feb9"
              alt=""
              className="h-8"
            />
          </div>
          <div className="space-y-4 w-full h-40 flex flex-col items-center justify-center border-gray-300 border-4 rounded-xl text-gray-500 hover:text-red-700 hover:border-red-700 hover:bg-red-300">
            <p className="text-center text-lg font-bold">Recepciones</p>
            <img
              src="https://cdn-icons.flaticon.com/png/512/3985/premium/3985894.png?token=exp=1646786205~hmac=69ff104844bfb16fe75fc3344d52b13b"
              alt=""
              className="h-10"
            />
          </div>
          <div className="space-y-4 w-full h-40 flex flex-col items-center justify-center border-gray-300 border-4 rounded-xl text-gray-500 hover:text-red-700 hover:border-red-700 hover:bg-red-300">
            <p className="text-center text-lg font-bold">Fiestas de trabajo</p>
            <img
              src="https://cdn-icons.flaticon.com/png/512/3195/premium/3195187.png?token=exp=1646786319~hmac=47833ae441d6140757ef61f629493935"
              alt=""
              className="h-10"
            />
          </div>
          <div className="space-y-4 w-full h-40 flex flex-col items-center justify-center border-gray-300 border-4 rounded-xl text-gray-500 hover:text-red-700 hover:border-red-700 hover:bg-red-300">
            <p className="text-center text-lg font-bold">Graduaciones</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/4270/4270578.png"
              alt=""
              className="h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Sections };
