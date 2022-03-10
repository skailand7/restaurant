import React from "react";

const Items = ({ image, title, price }) => {
  return (
    <div className="space-y-4">
      <div className="p-2 flex justify-between space-x-2 bg-white rounded-xl">
        <div className="w-2/5">
          <img src={image} className="h-32 w-full rounded-xl" alt="" />
        </div>
        <div className="w-3/4 flex flex-col justify-evenly space-y-4">
          <p className="font-bold text-lg text-gray-600">{title}</p>
          <div className="flex items-center space-x-2">
            <button className="h-10 w-10 rounded-full bg-slate-200">-</button>
            <p className="text-lg">1</p>
            <button className="h-10 w-10 rounded-full bg-slate-200">+</button>
          </div>
        </div>
        <div
          className="w-1/5 flex items-end pb-6
          "
        >
          <p className="font-bold">S./{price}</p>
        </div>
      </div>
    </div>
  );
};

export { Items };
