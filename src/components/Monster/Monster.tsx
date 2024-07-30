import React, { ReactElement } from "react";
import { IMonster } from "../../assets/mm.interfaces";
import s from "./Monster.module.css";

const Monster = (props: { monster: IMonster }): ReactElement => {
  let m = props.monster;
  return (
    <div>
      <div className={s.monster}>
        <h3>{m.name}</h3>
        <p>
          <b>
            ❤️ {m.hp}
            🛡️ {m.armor}
            🗡️ {m.attack} ({m.damage})
          </b>
        </p>
        <p>
          <b>Особые свойства:</b> {m.special}
        </p>
        <p>{/* {m.properties.map(p)=><i>{p}</i>} */}</p>
        <p>{m.description}</p>
        <p>
          <b>Инстинкт</b>: {m.instinct}
        </p>
      </div>
    </div>
  );
};

export default Monster;
