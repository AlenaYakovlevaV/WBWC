import React from "react";

export const AddSections = ({titles, setTitles, startImg}) => {
  return (
    <div className='elements'>
          <button onClick={() => setTitles([...titles, {id: titles.length+3, order: titles.length+4, key:'Заголовок', title: 'Title'}])} className='btn btn-add'>Titles</button>
          <button onClick={() => setTitles([...titles, {id: titles.length+3, order: titles.length+4, key: 'Карточки', 
      cards: [
        {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
      ]
    }])} className='btn btn-add'>Cards</button>
          <button onClick={() => setTitles([...titles, {id: titles.length+3, order: titles.length+4, key: 'Фильмы'}])} className='btn btn-add'>Films</button>
        </div>
  )
}