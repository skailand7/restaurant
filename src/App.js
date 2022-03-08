import React from "react";
import { Header } from "./Home/Header/Header";
import { Cover } from "./Home/Cover/Cover";
import { Local } from "./Local/Local";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Cover />
      <Local />
    </React.Fragment>
  );
}

export default App;
