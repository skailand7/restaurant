import React from "react";
import { Header } from "./Home/Header/Header";
import { Cover } from "./Home/Cover/Cover";
import { Main } from "./Home/Main/Main";
import { Local } from "./Local/Local";
import "./App.css";
import { Delivery } from "./Home/Delivery/Delivery";
import { Sections } from "./Home/Sections/Sections";
import { Footer } from "./Home/Footer/Footer";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

const shoppingArray = [];
function App() {
  const [checkout, setCheckout] = React.useState(shoppingArray);
  const checkoutCantity = checkout.length;
  return (
    <React.Fragment>
      <Header checkoutCantity={checkoutCantity} />
      <Cover />
      <Main checkout={checkout} setCheckout={setCheckout} />
      <Delivery />
      <Sections />
      <Footer />
      <ShoppingCart checkout={checkout} setCheckout={setCheckout} />
      <Local />
    </React.Fragment>
  );
}

export default App;
