import React from "react";

const SideMenu = (props) => {
  const openShoppingCart = () => {
    const shoppingCart = document.querySelector("#shoppingCart");
    shoppingCart.classList.contains("hidden")
      ? shoppingCart.classList.remove("hidden")
      : shoppingCart.classList.add("hidden");

    const menuContent = document.querySelector("#menuContent");
    menuContent.classList.add("hidden");
  };
  const openMenu = () => {
    const menuContent = document.querySelector("#menuContent");
    menuContent.classList.contains("hidden")
      ? menuContent.classList.remove("hidden")
      : menuContent.classList.add("hidden");
  };
  return (
    <aside
      id="menuContent"
      className="hidden h-[400px] w-full  p-8 lg:w-[500px] fixed  top-0 lg:top-[60px] right-0 bottom-0  bg-slate-700 z-40 rounded-l-xl space-y-16 overflow-y-auto rounded-b-2xl drop-shadow-2xl"
    >
      <div onClick={openMenu} className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-slate-100 drop-shadow-xl flex items-center">
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
        <p className="ml-2 text-white text-2xl">Menu</p>
      </div>
      <div className=" text-gray-100 space-y-4 flex flex-col justify-between">
        <div className="space-y-4 text-2xl font-bold ">
          <div className="relative">
            <p onClick={openShoppingCart}>Carrito</p>
            {props.checkoutCantity > 0 ? (
              <div className="h-3 w-3 bg-red-700 absolute top-2 -left-3 z-10 rounded-full flex items-center justify-center">
                <p className="font-bold text-white text-[0.5rem]">
                  {props.checkoutCantity}
                </p>
              </div>
            ) : (
              <div className="hidden h-3 w-3 bg-red-700 absolute top-0 left-0 z-10 rounded-full flex items-center justify-center">
                <p className="font-bold text-white text-[0.5rem]">
                  {props.checkoutCantity}
                </p>
              </div>
            )}
          </div>
          <p>Ubicacion</p>
          <p>Nosotros</p>
          <p>Contacto</p>
          <p>Buscar</p>
        </div>
        <p className="text-md ">Buscanos en redes sociales!</p>
      </div>
    </aside>
  );
};

export { SideMenu };
