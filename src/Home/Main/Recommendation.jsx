import React from "react";

const Recommendation = ({
  title,
  description,
  img,
  price,
  checkout,
  setCheckout,
}) => {
  const onCheckout = (img, title, price, quantity) => {
    const oldArray = [...checkout];
    const newObjeto = {
      image: img,
      title: title,
      price: price,
      quantity: quantity,
    };
    oldArray.push(newObjeto);
    setCheckout(oldArray);
  };

  return (
    <div className="">
      <div className="w-auto h-auto bg-white border-2  rounded-2xl drop-shadow-2xl p-4 space-y-2">
        <img
          src={img}
          alt=""
          className="h-56 w-full object-cover rounded-2xl"
        />
        <div className="w-80 flex justify-between items-center">
          <div>
            <p className="text-lg text-gray-700 font-bold">{title}</p>
            <p className="text-md text-red-700">{description}</p>
            <p className="text-2xl text-gray-900 font-extrabold">{price}</p>
          </div>
          <div className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-red-400 drop-shadow-xl">
            <svg
              onClick={() => onCheckout(img, title, price, "1")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Recommendation };
