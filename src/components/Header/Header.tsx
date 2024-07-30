import React, { ReactElement } from "react";
import s from "./Header.module.css";
import { BrowserRouter, NavLink, Routes } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <div className={s.header}>
      <div className={s.headerItem}>
        <NavLink to="/monsters">Monsters</NavLink>
      </div>
      <div className={s.headerItem}>
        <NavLink to="/creator">Creator</NavLink>
      </div>
    </div>
  );
};

export default Header;
