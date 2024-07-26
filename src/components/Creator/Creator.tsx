import React, { ReactElement } from "react";
import s from "./Creator.module.css";
import Name from "./Name/Name";
import Deals from "./Deals/Deals";
import Instinct from "./Instinct/Instinct";
import Number from "./Number/Number";
import Size from "./Size/Size";
import Defence from "./Defence/Defence";
import Known from "./Known/Known";
import Attack from "./Attack/Attack";
import Describe from "./Describe/Describe";

const Creator = () => {
  return (
    <div>
      <Name />
      <Deals />
      <Instinct />
      <Number />
      <Size />
      <Defence />
      <Known />
      <Attack />
      <Describe />
    </div>
  );
};

export default Creator;
