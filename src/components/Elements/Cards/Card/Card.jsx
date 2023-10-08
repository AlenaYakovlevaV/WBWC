import React from "react";
import { CardTitle } from "./CardTitle";
import { CardDescription } from "./CardDescription";
import { CardImage } from "./CardImage.jsx";

export const Card = ({edit, titles, index, setTitles, card, i}) => {
  return (
    <div>
      <CardTitle edit={edit} i={i} titles={titles} index={index} setTitles={setTitles} card={card}/>
      <CardDescription edit={edit} card={card} i={i} titles={titles} index={index} setTitles={setTitles} />
      <CardImage card={card} titles={titles} index={index} i={i} />
    </div>
  )
}