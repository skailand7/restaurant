import React from "react";

const Bill = (props) => {
  return (
    <div className="px-4 py-8 space-y-8 bg-white rounded-xl">
      <div>
        <div className="flex justify-between">
          <p className="font-bold">Subtotal</p>
          <p>S./{props.totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Costo delivery</p>
          <p>GRATIS</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-xl">Total</p>
        <p>S./{(props.totalPrice - 2).toFixed(2)}</p>
      </div>
    </div>
  );
};

export { Bill };
