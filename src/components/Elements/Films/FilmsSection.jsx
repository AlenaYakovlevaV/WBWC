import React from "react";
import { Film } from "./Film";
import { FilmList } from "./FilmList";
import { ButtonDelete } from "../../Buttons/ButtonDelete";

export const FilmsSection = ({index, edit, titles, setTitles}) => {
  const [films, setFilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true); 

  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://64f0e4498a8b66ecf77a380d.mockapi.io/films")
    .then(res => res.json())
    .then((json) => {
      setFilms(json)
    })
    .catch((err) => {
      console.warn(err);
      alert('Ошибка получения данных');
    })
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <div key={index}>
      <div className={!edit ? 'section-films' : 'section-films section-edit'}>
        <div>
        <ButtonDelete setTitles={setTitles} titles={titles} index={index}/>
        </div>
        {isLoading ? <p>Loading ...</p> : <FilmList films={films}/>}
      </div>
    </div>
  )
}