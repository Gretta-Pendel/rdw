import React, { FC, Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import mm from "./assets/mm";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main mm={mm} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
