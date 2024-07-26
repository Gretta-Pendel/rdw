import React, { ReactElement } from "react";
import s from "./Known.module.css";
import m from "../../Main/Main.module.css";

const Known = (): ReactElement => {
  return (
    <div className={s}>
      <div className="known">
        <p className={m.q}>What is it known for? (Choose all that apply.)</p>
        <ul>
          <li>
            <input type="checkbox" name="known" id="" />
            Unrelenting strength
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            Skill in offense
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            Skill in defense
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            Deft strikes
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            Uncanny endurance
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            Deceit and trickery
          </li>
          <li>
            <input type="checkbox" name="known" id="" />A useful adaptation like
            being amphibious or having wings
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            The favor of the gods (increased lethality)
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            The favor of the gods (increased durability)
          </li>
          <li>
            <input type="checkbox" name="known" id="" />
            Spells and magic
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Known;
