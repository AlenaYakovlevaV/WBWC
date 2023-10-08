import React from "react";
import { Film } from "./Film";

export const FilmList = ({films}) => {
  return (
    <ul className='films__list'>
      {films.map((film, j) => {
        return (
          <li key={j}>
            <Film film={film}/>
          </li>
        )
      })}
    </ul>
  )
}