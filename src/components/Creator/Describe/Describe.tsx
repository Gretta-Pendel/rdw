import React, { ReactElement } from "react";
import s from "./Describe.module.css";
import m from "../../Main/Main.module.css";

const Describe = (): ReactElement => {
  return (
    <div className={s}>
      <div className="describe">
        <p className={m.q}>
          Which of these describe it? (Choose all that apply.)
        </p>

        <ul>
          <li>
            <input type="checkbox" name="describe" id="" />
            It isn't dangerous because of the wounds it inflicts, but for other
            reasons
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It organizes into larger groups that it can call on for support
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It's as smart as a human or thereabouts
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It actively defends itself with a shield or similar
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It collects trinkets that humans would consider valuable (gold,
            gems, secrets)
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It's from beyond this world
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It's kept alive by something beyond simple biology
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It was made by someone
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            Its appearance is disturbing, terrible, or horrible
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It doesn't have organs or discernible anatomy
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It (or its species) is ancient—older than man, elves, and dwarves
          </li>
          <li>
            <input type="checkbox" name="describe" id="" />
            It abhors violence
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Describe;
