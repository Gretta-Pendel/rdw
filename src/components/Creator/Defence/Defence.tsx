import React, { ReactElement } from "react";
import s from "./Defence.module.css";
import m from "../../Main/Main.module.css";

const Defence = (): ReactElement => {
  return (
    <div className={s}>
      <div className="defense">
        <p className={m.q}>What is its most important defense?</p>
        <select>
          <option>Cloth or flesh</option>
          <option>Leathers or thick hide</option>
          <option>Mail or scales</option>
          <option>Plate or bone</option>
          <option>Permanent magical protection</option>
        </select>
      </div>
    </div>
  );
};

export default Defence;
