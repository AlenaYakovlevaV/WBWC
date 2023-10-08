import React from "react";
import { ButtonDelete } from "../../Buttons/ButtonDelete";

export const TitleSection = ({title, index, edit, titles, setTitles}) => {
  const changeContent = (e) => {
      let titleS = document.querySelectorAll('.section-title__title')[index].innerHTML;
      let arr = [...titles];
      arr[index].title = titleS;
      setTitles(arr);
  }

  return (
    <div key={index} className={!edit ? 'section-title' : 'section-title section-edit'}>
      <div className='title'>
        <h1 
          className='section-title__title'
          contentEditable = {edit}
          onClick={changeContent}
          onMouseMove={changeContent}
        >{title.title}</h1>
      </div>
      <ButtonDelete setTitles={setTitles} titles={titles} index={index}/>
    </div>
  )
}
