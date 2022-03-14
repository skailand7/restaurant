import React from "react";

const Items = ({ image, title, price, quantity, checkout, setCheckout }) => {
  const onChangeCheckout = (img, title, price, quantity, operation) => {
    let newQuantity;
    operation === "add"
      ? (newQuantity = Number(quantity) + 1)
      : (newQuantity = Number(quantity) - 1);
    const oldArray = [...checkout];
    const newObjeto = {
      image: img,
      title: title,
      price: price,
      quantity: newQuantity,
    };
    const indexArray = oldArray.findIndex((item) => item.title === title);
    oldArray.splice(indexArray, 1, newObjeto);
    setCheckout(oldArray);
  };

  const onDeleteCheckout = (title) => {
    const oldArray = [...checkout];
    const indexArray = oldArray.findIndex((item) => item.title === title);
    oldArray.splice(indexArray, 1);
    setCheckout(oldArray);
  };

  return (
    <div className="space-y-4">
      <div className="p-2 flex justify-between space-x-2 bg-white rounded-xl">
        <div className="w-2/5">
          <img src={image} className="h-32 w-full rounded-xl" alt="" />
        </div>
        <div className="w-3/4 flex flex-col justify-evenly space-y-4">
          <p className="font-bold text-lg text-gray-600">{title}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                onChangeCheckout(image, title, price, quantity, "remove")
              }
              className={`${
                quantity === 1 ? "invisible" : null
              } h-10 w-10 rounded-full bg-slate-200 `}
            >
              -
            </button>
            <p className="text-lg">{quantity}</p>
            <button
              onClick={() =>
                onChangeCheckout(image, title, price, quantity, "add")
              }
              className="h-10 w-10 rounded-full bg-slate-200"
            >
              +
            </button>
          </div>
        </div>
        <div
          onClick={() => onDeleteCheckout(title)}
          className="w-1/5 flex flex-col justify-between py-4
          "
        >
          <div className="flex justify-end">
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <p className="font-bold">S./{(price * quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export { Items };
