import React from "react";

export const CardDescription = ({edit, card, i, titles, index, setTitles}) => {
  const changeContent = (e) => {
    let descr = document.querySelectorAll('.description')[i].innerHTML;
    let arr = [...titles];
    arr[index].cards[i].description = descr;
    setTitles(arr);
  }

  return (
    <p 
      contentEditable = {edit}
      className='description'
      title={card.description}
      onClick={changeContent}
      onMouseMove={changeContent}
      >
        {card.description}
    </p>
  )
}