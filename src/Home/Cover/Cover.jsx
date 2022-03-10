import React from "react";

const Cover = (props) => {
  const onOpenModal = () => {
    const modal = document.querySelector("#localModal");
    modal.classList.remove("hidden");
  };
  const openMenu = () => {
    const menuContent = document.querySelector("#menuContent");
    menuContent.classList.contains("hidden")
      ? menuContent.classList.remove("hidden")
      : menuContent.classList.add("hidden");
  };
  return (
    <section className="lg:mt-[60px]">
      <div
        onClick={openMenu}
        className="bg-white/75 lg:hidden w-10 h-10 rounded-lg flex justify-center items-center absolute top-4 right-4 z-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {props.checkoutCantity > 0 ? (
          <div className="h-3 w-3 bg-red-700 absolute top-0 right-0 z-10 rounded-full flex items-center justify-center">
            <p className="font-bold text-white text-[0.5rem]">
              {props.checkoutCantity}
            </p>
          </div>
        ) : (
          <div className="hidden h-3 w-3 bg-red-700 absolute top-0 right-0 z-10 rounded-full flex items-center justify-center">
            <p className="font-bold text-white text-[0.5rem]">
              {props.checkoutCantity}
            </p>
          </div>
        )}
      </div>
      <div className="h-auto w-full lg:h-[500px] p-0  relative flex justify-center lg:justify-start">
        <img
          src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="h-[600px] object-cover w-full bg-cover bg-center brightness-[.35] md:hidden lg:hidden"
        />
        <img
          src="https://images.pexels.com/photos/5531301/pexels-photo-5531301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="hidden w-full object-cover md:block lg:block brightness-[.25]"
        />
        <p className="text-3xl md:left-16 md:text-left md:text-[2rem] lg:text-[3rem] lg:tracking-widest lg:leading-tight font-bold text-center text-white absolute bottom-52 md:bottom-72 md:uppercase lg:text-left  lg:w-1/3">
          Para ti
          <br />
          El mejor sabor
        </p>
        <p className="hidden md:block text-white absolute bottom-48 md:bottom-40 lg:bottom-48 md:text-left md:left-16 md:w-1/3">
          La mejor atencion y servicio para brindarte la mejor experiencia
          culinaria, contamos con aperitivos, platos de fondo, postres y
          bebidas!
        </p>
        <button
          onClick={onOpenModal}
          className="rounded-full  bg-red-700 w-auto px-8 py-4 flex items-center text-white font-bold hover:bg-red-600 absolute bottom-24 md:left-16"
          type="button"
        >
          VER LOCAL
        </button>
      </div>
    </section>
  );
};

export { Cover };
