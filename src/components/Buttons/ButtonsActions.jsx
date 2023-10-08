import React from "react";
import { ButtonDelete } from "./ButtonDelete";

export const ButtonsActions = ({titles, setTitles, index, startImg}) => {

  return (
    <div className='btn-actions'>
      <button 
        onClick={() => {
          const newElement = {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'}
          let ntitles = [...titles];
          ntitles[index].cards.push(newElement);
          setTitles(ntitles);
        }}
        className='add'></button>
      <ButtonDelete setTitles={setTitles} titles={titles} index={index}/> 
    </div>
  )
}