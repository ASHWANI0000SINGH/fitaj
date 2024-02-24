import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import Contactus from "./components/Contactus";
import Dummy from "./components/Dummy";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Contactus />
      {/* <Dummy /> */}
    </>
  );
};

export default App;
