import React, { ReactElement } from "react";
import IMonster from "../../assets/mm.interfaces";

const Monster = (props: { monster: IMonster }): ReactElement => {
  return <div>{props.monster.name}</div>;
};

export default Monster;
