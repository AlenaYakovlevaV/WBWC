import React from "react";
import { ButtonsActions } from "../../Buttons/ButtonsActions";
import { Cards } from "./Cards";

export const CardsSection = ({edit, titles, setTitles, index, startImg, title}) => {

  return (
    <div key={index}>
      <div className={!edit ? 'section-cards' : 'section-cards section-edit'}>
        <ButtonsActions titles={titles} setTitles={setTitles} index={index} startImg={startImg}/>
        <Cards title={title} titles={titles} index={index} setTitles={setTitles} edit={edit}/>
      </div>
    </div>
  )
}