import React, { ReactElement } from "react";
import s from "./Attack.module.css";
import m from "../../Main/Main.module.css";

const Attack = (): ReactElement => {
  return (
    <div className={s}>
      <div className="attack">
        <p className={m.q}>What is its most common form of attack?</p>
        <p>Answer these questions about its common form of attack</p>
        <select name="" id="">
          <option>Its armaments are vicious and obvious</option>
          <option>It lets the monster keep others at bay</option>
          <option>Its armaments are small and weak</option>
          <option>Its armaments can slice or pierce metal</option>
          <option>It can just tear metal apart</option>
          <option>Armor doesn't help with the damage it deals</option>
          <option>It usually attacks at range (near)</option>
          <option>It usually attacks at range (far)</option>
        </select>
      </div>
    </div>
  );
};

export default Attack;
