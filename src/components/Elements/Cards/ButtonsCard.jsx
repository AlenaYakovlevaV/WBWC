import React from "react";

export const ButtonsCards = ({titles, index, setTitles, i, card}) => {

  return (
    <div className='btn-card'>
      <button
        onClick={() =>
          {
            let ntitles = [...titles];
            ntitles[index].cards.splice(i, 1);
            setTitles(ntitles);
          }
        }
        className='delete'></button>
    <input 
      title='Цвет фона'
      className='color'
      type="color" 
      value={card.backgroundColor}
      onChange={(e) => {
        let arr = [...titles];
        arr[index].cards[i].backgroundColor = e.target.value;
        setTitles(arr);
      }}
      />       
    <input 
      title={`Цвет текста`}
      className='color'
      type="color" 
      value={card.color}
      onChange={(e) => {
        let arr = [...titles];
        arr[index].cards[i].color = e.target.value;
        setTitles(arr);
      }}
    />                          
    </div>
  )
}