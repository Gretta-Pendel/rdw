import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import s from "./Main.module.css";
import Creator from "../Creator/Creator";
import Monsters from "../Monsters/Monsters";
import { IMonster } from "../../assets/mm.interfaces";
import mm from "../../assets/mm";

type PropsType = {
  mm: IMonster[];
};

const Main: FC<PropsType> = ({ mm }) => {
  let MonstersComponent: React.FC = () => <Monsters mm={mm} />;
  return (
    <div className={s.main}>
      <Routes>
        <Route path="/creator" Component={Creator}></Route>
        <Route path="/monsters" Component={MonstersComponent}></Route>
      </Routes>
    </div>
  );
};

export default Main;
