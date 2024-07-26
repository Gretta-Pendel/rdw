import React, { ReactElement } from "react";
import s from "./Deals.module.css";
import m from "../../Main/Main.module.css";

const Deals = (): ReactElement => {
  return (
    <div className={s}>
      <div className="deals">
        <p className={m.q}>What is it known to do?</p>
        <p>(Write a monster move describing what it does.)</p>
      </div>
    </div>
  );
};

export default Deals;
