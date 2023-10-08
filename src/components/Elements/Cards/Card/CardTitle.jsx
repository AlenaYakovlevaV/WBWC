import React from "react";

export const CardTitle = ({edit, i, titles, index, setTitles, card}) => {
  const changeContent = (e) => {
    let label = document.querySelectorAll('.card__title')[i].innerHTML;
    let arr = [...titles];
    arr[index].cards[i].label = label;
    setTitles(arr);
  }

  return (
    <h2 
      className='card__title'
      contentEditable = {edit}
      onClick={changeContent}
      onMouseMove={changeContent}
    >{card.label}</h2>
  )
}