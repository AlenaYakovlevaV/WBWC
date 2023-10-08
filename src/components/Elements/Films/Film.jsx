import React from "react";

export const Film =({film}) => {
  return (
    <div>
      <div className='films-top'>
        <div className='films-left'>
          <img src={film.capture} alt='Обложка фильма' />
        </div>
        <div className='films-right'>
          <h2>{film.name}</h2>
          <p>Описание фильма: {film.description}</p>
        </div>
      </div>
      <div className='films-bottom'>
        <span className='raiting'>Рейтинг: {film.rating}</span>
        <span>Год выхода: {film.year}</span>
      </div>
    </div>
  )
}