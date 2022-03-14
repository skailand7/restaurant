import React from "react";
import { Title } from "./Title";
import { Selector } from "./Selector";
import { Recommendation } from "./Recommendation";
import { Cafe } from "./Cafe";
import { Entries } from "./Entries";
import { Lunch } from "./Lunch";
import { Dinner } from "./Dinner";

const dishesRecommend = [
  {
    img: "https://images.pexels.com/photos/3794739/pexels-photo-3794739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Desayuno del Dia",
    description: "Cafe, huevos y pan",
    price: "8.80",
  },
  {
    img: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Desayuno Especial",
    description: "Pancakes, fresas y mermelada",
    price: "11.90",
  },
  {
    img: "https://images.pexels.com/photos/3850660/pexels-photo-3850660.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Desayuno Ejecutivo",
    description: "Palta, pan y frutos secos",
    price: "17.80",
  },
];

const dishesCafe = [
  {
    img: "https://images.pexels.com/photos/11378532/pexels-photo-11378532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Espresso",
    description: "Bebida caliente",
    price: "3.40",
  },
  {
    img: "https://images.pexels.com/photos/4671862/pexels-photo-4671862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Espresso Macchiato",
    description: "Bebida caliente cafe",
    price: "5.90",
  },
  {
    img: "https://images.pexels.com/photos/7239437/pexels-photo-7239437.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Vainilla Latte",
    description: "Bebida de vainilla",
    price: "6.20",
  },
  {
    img: "https://images.pexels.com/photos/1469904/pexels-photo-1469904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Hot Chocolate",
    description: "Bebida dulce",
    price: "7.40",
  },
];

const dishesEntries = [
  {
    img: "https://images.pexels.com/photos/3606800/pexels-photo-3606800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Almejas al vapor",
    description: "Almejas finas",
    price: "17.70",
  },
  {
    img: "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Sushi",
    description: "Deliciosos trozos",
    price: "23.90",
  },
  {
    img: "https://images.pexels.com/photos/952647/pexels-photo-952647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Langostinos en Salsa",
    description: "Langostinos frescos",
    price: "18.90",
  },
  {
    img: "https://images.pexels.com/photos/668141/pexels-photo-668141.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Pasteles en Bandeja",
    description: "Manzana, kiwi, platano",
    price: "12.80",
  },
];

const dishesLunch = [
  {
    img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Pasta con Albahaca",
    description: "Pasta, tomates y albahaca",
    price: "32.90",
  },
  {
    img: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Arroz con Calabacin",
    description: "Arroz, calabacin y huevos",
    price: "28.90",
  },
  {
    img: "https://images.pexels.com/photos/2862154/pexels-photo-2862154.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Ensalada de Verduras",
    description: "Tomate, pepinillo, nabo",
    price: "20.90",
  },
  {
    img: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Carne Asada",
    description: "Cerdo y vegetales variados",
    price: "27.90",
  },
];

const dishesDinner = [
  {
    img: "https://images.pexels.com/photos/2739250/pexels-photo-2739250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Brochetas con Pure",
    description: "Cerdo, papa y vegetales",
    price: "47.90",
  },
  {
    img: "https://images.pexels.com/photos/3490362/pexels-photo-3490362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Calamares con Salsa",
    description: "Calamares, mayonesa, ketchup",
    price: "25.90",
  },
  {
    img: "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Pasta con Parmesano",
    description: "Pasta en salsa",
    price: "29.90",
  },
  {
    img: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Ensalada de Queso",
    description: "Tomate, apio y queso",
    price: "24.90",
  },
];

const Main = (props) => {
  return (
    <section id="main">
      <div>
        <Title />
        <div>
          <div>
            <Selector />
          </div>
          <section className="bg-slate-200 p-4 w-auto">
            <div>
              <div
                id="recommendation"
                className="w-auto h-88 flex overflow-x-auto space-x-2"
              >
                {dishesRecommend.map((item) => {
                  return (
                    <Recommendation
                      key={item.title}
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      checkout={props.checkout}
                      setCheckout={props.setCheckout}
                    />
                  );
                })}
              </div>
              <div
                id="cafe"
                className=" hidden w-auto h-88 flex overflow-x-auto space-x-2"
              >
                {dishesCafe.map((item) => {
                  return (
                    <Cafe
                      key={item.title}
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
              </div>
              <div
                id="entradas"
                className="hidden w-auto h-88 flex overflow-x-auto space-x-2"
              >
                {dishesEntries.map((item) => {
                  return (
                    <Entries
                      key={item.title}
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
              </div>
              <div
                id="almuerzo"
                className="hidden w-auto h-88 flex overflow-x-auto space-x-2"
              >
                {dishesLunch.map((item) => {
                  return (
                    <Lunch
                      key={item.title}
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
              </div>
              <div
                id="cena"
                className="hidden w-auto h-88 flex overflow-x-auto space-x-2"
              >
                {dishesDinner.map((item) => {
                  return (
                    <Dinner
                      key={item.title}
                      img={item.img}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export { Main };
