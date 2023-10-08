import React from "react";

export const AddSections = ({titles, setTitles, startImg}) => {
  return (
    <div className='elements'>
          <button onClick={() => setTitles([...titles, {id: titles.length+3, order: titles.length+4, key:'Заголовок', title: 'Заголовок'}])} className='btn btn-add'>Заголовок</button>
          <button onClick={() => setTitles([...titles, {id: titles.length+3, order: titles.length+4, key: 'Карточки', 
      cards: [
        {label: 'Карточка', description: 'Описание карточки', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        {label: 'Карточка', description: 'Описание карточки', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        {label: 'Карточка', description: 'Описание карточки', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        {label: 'Карточка', description: 'Описание карточки', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
      ]
    }])} className='btn btn-add'>Карточки</button>
          <button onClick={() => setTitles([...titles, {id: titles.length+3, order: titles.length+4, key: 'Фильмы'}])} className='btn btn-add'>Фильмы</button>
        </div>
  )
}