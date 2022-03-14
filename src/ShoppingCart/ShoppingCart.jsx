import React from "react";
import { Discount } from "./Discount";
import { Items } from "./Items";
import { Bill } from "./Bill";
import { Charge } from "./Charge";
import "./ShoppingCart.css";

const ShoppingCart = ({ checkout, setCheckout, quantity }) => {
  const totalPrice = checkout.reduce(
    (acc, item) => acc + Number(item.price * item.quantity),
    0
  );
  return (
    <aside
      id="shoppingCart"
      className="hidden w-full h-full p-8 lg:w-[500px] fixed  top-0 lg:top-[60px] right-0 bottom-0  bg-gray-700 z-30 rounded-l-xl space-y-4 overflow-y-auto"
    >
      <div className="flex justify-between items-center px-4 rounded-xl w-full h-12 bg-white mb-8">
        <p className="text-3xl font-bold text-gray-800">
          {checkout.length}
          {checkout.length > 1 ? " Items" : " Item"}
        </p>
        <button className="bg-red-700 h-8 font-bold text-white text-sm px-4 rounded-xl">
          AGREGAR MAS
        </button>
      </div>
      {checkout.length >= 1 ? (
        checkout.map((item) => {
          return (
            <Items
              key={item.title}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
              checkout={checkout}
              setCheckout={setCheckout}
            />
          );
        })
      ) : (
        <p className="flex w-full h-16 items-center justify-center rounded-xl text-gray-400 bg-white font-bold">
          No hay items
        </p>
      )}

      <Discount />
      <Bill totalPrice={totalPrice} />
      <Charge />
    </aside>
  );
};

export { ShoppingCart };
