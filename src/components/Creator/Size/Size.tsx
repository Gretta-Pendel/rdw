import React, { ReactElement } from "react";
import s from "./Size.module.css";
import m from "../../Main/Main.module.css";

const Size = (): ReactElement => {
  return (
    <div className={s}>
      <div className="size">
        <p className={m.q}>How big is it?</p>
        <select>
          <option>Smaller than a house cat</option>
          <option>Halfling-esque</option>
          <option>About human size</option>
          <option>As big as a cart</option>
          <option>Much larger than a cart</option>
        </select>
      </div>
    </div>
  );
};

export default Size;
