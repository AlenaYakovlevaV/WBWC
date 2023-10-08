import React from "react";
import { ButtonsCards } from "./ButtonsCard";
import { Card } from "./Card/Card";

export const Cards = ({title, titles, index, setTitles, edit}) => {

  return (
    <div>
      <ul className='cards__list'>
      {
        title.cards.map((card, i) => {
          return <li key={i}>
            <div className='card' style={{backgroundColor: card.backgroundColor, color: card.color}}>
              <ButtonsCards titles={titles} index={index} setTitles={setTitles} i={i} card={card}/>
              <Card edit={edit} titles={titles} index={index} setTitles={setTitles} card={card} i={i}/>
            </div>
          </li>
        })
      }
      </ul>  
    </div>
  )
}