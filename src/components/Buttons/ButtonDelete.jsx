import React from "react";

export const ButtonDelete = ({setTitles, titles, index}) => {
  return (
    <button
      onClick={() =>
          {
            setTitles(titles.filter((e, i) => {return index !== i}))
          }
        }
      className='delete'>
    </button>
  )
}