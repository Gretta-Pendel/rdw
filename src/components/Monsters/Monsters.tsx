import React, { FC } from "react";
import s from "./Monsters.module.css";
import mm from "../../assets/mm";
import { IMonster } from "../../assets/mm.interfaces";
import Monster from "../Monster/Monster";

type PropsType = {
  mm: IMonster[];
};

const Monsters: FC<PropsType> = ({ mm }) => {
  let mList = mm.map((m) => <Monster monster={m}></Monster>);
  return <div>{mList}</div>;
};

export default Monsters;
