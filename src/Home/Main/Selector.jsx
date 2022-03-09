import React from "react";
const Selector = () => {
  const onClickRecommendation = () => {
    const botones = document.querySelectorAll(".boton");
    botones.forEach((item) => {
      item.classList.remove("text-red-700", "font-bold");
    });

    const recommendationB = document.querySelector("#recommendationB");
    recommendationB.classList.add("text-red-700", "font-bold");

    const recommendation = document.querySelector("#recommendation");
    recommendation.classList.remove("hidden");
    const cafe = document.querySelector("#cafe");
    cafe.classList.add("hidden");
    const entradas = document.querySelector("#entradas");
    entradas.classList.add("hidden");
    const almuerzo = document.querySelector("#almuerzo");
    almuerzo.classList.add("hidden");
    const cena = document.querySelector("#cena");
    cena.classList.add("hidden");
  };
  const onClickCafe = () => {
    const botones = document.querySelectorAll(".boton");
    botones.forEach((item) => {
      item.classList.remove("text-red-700", "font-bold");
    });

    const cafeB = document.querySelector("#cafeB");
    cafeB.classList.add("text-red-700", "font-bold");

    const recommendation = document.querySelector("#recommendation");
    recommendation.classList.add("hidden");
    const cafe = document.querySelector("#cafe");
    cafe.classList.remove("hidden");
    const entradas = document.querySelector("#entradas");
    entradas.classList.add("hidden");
    const almuerzo = document.querySelector("#almuerzo");
    almuerzo.classList.add("hidden");
    const cena = document.querySelector("#cena");
    cena.classList.add("hidden");
  };
  const onClickEntries = () => {
    const botones = document.querySelectorAll(".boton");
    botones.forEach((item) => {
      item.classList.remove("text-red-700", "font-bold");
    });

    const entradasB = document.querySelector("#entradasB");
    entradasB.classList.add("text-red-700", "font-bold");

    const recommendation = document.querySelector("#recommendation");
    recommendation.classList.add("hidden");
    const cafe = document.querySelector("#cafe");
    cafe.classList.add("hidden");
    const entradas = document.querySelector("#entradas");
    entradas.classList.remove("hidden");
    const almuerzo = document.querySelector("#almuerzo");
    almuerzo.classList.add("hidden");
    const cena = document.querySelector("#cena");
    cena.classList.add("hidden");
  };

  const onClickLunch = () => {
    const botones = document.querySelectorAll(".boton");
    botones.forEach((item) => {
      item.classList.remove("text-red-700", "font-bold");
    });

    const almuerzoB = document.querySelector("#almuerzoB");
    almuerzoB.classList.add("text-red-700", "font-bold");

    const recommendation = document.querySelector("#recommendation");
    recommendation.classList.add("hidden");
    const cafe = document.querySelector("#cafe");
    cafe.classList.add("hidden");
    const entradas = document.querySelector("#entradas");
    entradas.classList.add("hidden");
    const almuerzo = document.querySelector("#almuerzo");
    almuerzo.classList.remove("hidden");
    const cena = document.querySelector("#cena");
    cena.classList.add("hidden");
  };

  const onClickDinner = () => {
    const botones = document.querySelectorAll(".boton");
    botones.forEach((item) => {
      item.classList.remove("text-red-700", "font-bold");
    });

    const cenaB = document.querySelector("#cenaB");
    cenaB.classList.add("text-red-700", "font-bold");

    const recommendation = document.querySelector("#recommendation");
    recommendation.classList.add("hidden");
    const cafe = document.querySelector("#cafe");
    cafe.classList.add("hidden");
    const entradas = document.querySelector("#entradas");
    entradas.classList.add("hidden");
    const almuerzo = document.querySelector("#almuerzo");
    almuerzo.classList.add("hidden");
    const cena = document.querySelector("#cena");
    cena.classList.remove("hidden");
  };

  return (
    <div className="w-auto h-12 flex overflow-x-auto text-gray-600 text-lg space-x-6 px-4">
      <div className="flex flex-col justify-center items-center">
        <button
          id="recommendationB"
          onClick={onClickRecommendation}
          className="boton text-red-700 font-bold hover:text-gray-800 focus:text-red-700 focus:font-bold"
        >
          Recomendacion
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          id="cafeB"
          onClick={onClickCafe}
          className=" boton hover:text-gray-800 focus:text-red-700 focus:font-bold"
        >
          Cafe
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          id="entradasB"
          onClick={onClickEntries}
          className=" boton hover:text-gray-800 focus:text-red-700 focus:font-bold"
        >
          Entradas
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          id="almuerzoB"
          onClick={onClickLunch}
          className=" boton hover:text-gray-800 focus:text-red-700 focus:font-bold"
        >
          Almuerzo
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          id="cenaB"
          onClick={onClickDinner}
          className=" boton hover:text-gray-800 focus:text-red-700 focus:font-bold"
        >
          Cena
        </button>
      </div>
    </div>
  );
};

export { Selector };
