import React, { ReactElement } from "react";
import s from "./Number.module.css";
import m from "../../Main/Main.module.css";

const Number = (): ReactElement => {
  return (
    <div className={s}>
      <div className="number">
        <p className={m.q}>How does it usually hunt or fight?</p>
        <select>
          <option>In large groups</option>
          <option>In small groups, about 2-5</option>
          <option>All by its lonesome</option>
        </select>
      </div>
    </div>
  );
};

export default Number;
