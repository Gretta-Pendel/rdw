import React, { ReactElement } from "react";
import s from "./Name.module.css";
import m from "../../Main/Main.module.css";

const Name = (): ReactElement => {
  return (
    <div className={s}>
      <div className="name">
        <p className={m.q}>What do you call it?</p>
      </div>
    </div>
  );
};

export default Name;
