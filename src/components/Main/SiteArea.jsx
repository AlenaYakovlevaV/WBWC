import React from "react";
import { TitleSection } from "../Elements/Titles/TitleSection";
import { CardsSection } from "../Elements/Cards/CardsSections";
import { FilmsSection } from "../Elements/Films/FilmsSection";

export const SiteArea = ({setTitles, titles, edit, startImg}) => {
  const [currentSection, setCurrentSection] = React.useState(null)

  function dragStartHandler(e, section) {
    setCurrentSection(section);
  }

  function dragOverHandler(e) {
    e.preventDefault();
  }

  function dropHandler(e, section) {
    e.preventDefault();
    setTitles(titles.map(s => {
      if (s.id === section.id) {
        console.log('s.id', s.id);
        console.log('section.id', section.id);
        return {...s, order: currentSection.order}
      }
      if (s.id === currentSection.id) {
        console.log('s.id', s.id);
        console.log('currentSection.id', section.id);
        return {...s, order: section.order}
      }

      return s;
    }))
    console.log('drop', section);
  }

  const sortSections = (a, b) => {
    if (a.order >= b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <div 
      className='site'
    >
      <div>
        {titles.sort(sortSections).map((title, index) => 
          <div
            onDragStart={(e) => dragStartHandler(e, title)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, title)} 
            draggable={true}
            key={index}
          >
          {title.key === 'Заголовок' ? 
            <TitleSection title={title} index={index} edit={edit} titles={titles} setTitles={setTitles}/>
            : title.key === 'Карточки' ? 
            <CardsSection edit={edit} titles={titles} setTitles={setTitles} index={index} startImg={startImg} title={title}/>
            : title.key === 'Фильмы' ?
            <FilmsSection index={index} edit={edit} titles={titles} setTitles={setTitles}/>
            : ''
          }
        </div>)}
      </div>
    </div>
  )
}