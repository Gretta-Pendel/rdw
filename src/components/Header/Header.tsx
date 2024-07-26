import React, { ReactElement } from "react";
import s from "./Header.module.css";
import { BrowserRouter, NavLink, Routes } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <div className="{s}">
      {/* <BrowserRouter> */}
      <div>
        <NavLink to="/monsters">Monsters</NavLink>
      </div>
      <div>
        <NavLink to="/creator">Creator</NavLink>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
};

export default Header;
