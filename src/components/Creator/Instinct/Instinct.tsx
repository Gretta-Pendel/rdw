import React, { ReactElement } from "react";
import s from "./Instinct.module.css";
import m from "../../Main/Main.module.css";

const Instinct = (): ReactElement => {
  return (
    <div className={s}>
      <div className="instinct">
        <p className={m.q}>
          What does it want that causes problems for others?
        </p>
        <p>(This is its instinct. What does he do most of the time?)</p>
      </div>
    </div>
  );
};

export default Instinct;
