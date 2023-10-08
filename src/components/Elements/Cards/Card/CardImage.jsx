import React from "react";

export const CardImage = ({card, titles, index, i}) => {

  return (
    <div className='image'>
      <img src={card.image} alt="img" />
      <input type='file' 
      onChange={(e) => {
        titles[index].cards[i].image = e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : card.image
      }} />
    </div>
  )
}