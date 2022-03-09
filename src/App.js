import React from "react";
import { Header } from "./Home/Header/Header";
import { Cover } from "./Home/Cover/Cover";
import { Main } from "./Home/Main/Main";
import { Local } from "./Local/Local";
import "./App.css";
import { Delivery } from "./Home/Delivery/Delivery";
import { Sections } from "./Home/Sections/Sections";
import { Footer } from "./Home/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cover />
      <Main />
      <Delivery />
      <Sections />
      <Footer />
      <Local />
    </React.Fragment>
  );
}

export default App;
