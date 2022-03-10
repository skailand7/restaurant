import React from "react";

const Charge = () => {
  const openShoppingCart = () => {
    const shoppingCart = document.querySelector("#shoppingCart");
    shoppingCart.classList.contains("hidden")
      ? shoppingCart.classList.remove("hidden")
      : shoppingCart.classList.add("hidden");
  };
  return (
    <div className="px-4 py-8 space-y-8 bg-white rounded-xl">
      <div className="flex justify-center items-center">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
          alt=""
          className="h-4"
        />
        <input
          type="text"
          placeholder="card number"
          value="**** **** **** 9060"
          className="border-2 border-blue-200 ml-2 rounded-xl p-2"
          readOnly
        />
        <div className="ml-2 h-8 w-8 rounded-full bg-white drop-shadow-xl flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="space-y-2">
        <p>
          <span className="font-bold">Cliente:</span> Miguel Turpo
        </p>
        <p>
          <span className="font-bold">Forma de pago:</span> Tarjeta
        </p>
      </div>
      <div className="space-y-2">
        <button className="w-full h-auto p-4 text-white bg-gray-800 rounded-xl">
          PROCEDER A PAGO
        </button>
        <button
          onClick={openShoppingCart}
          className="w-full h-auto p-4 text-gray-800 bg-white border-2 border-gray-800 rounded-xl"
        >
          CANCELAR
        </button>
      </div>
    </div>
  );
};

export { Charge };
