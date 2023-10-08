import React from "react";

export const Header = ({setMode, setEdit, setReset}) => {
  return (
    <header className='header'>
      <div className='header-right'>
        <h1>Конструктор сайта</h1>
      </div>
      <div className='header-left'>
        <button className='btn btn-mode' onClick={() => {setMode(true); setEdit(true)}}>Edit</button>
        <button className='btn btn-mode' onClick={() => {setMode(false); setEdit(false)}}>View</button>
        <button className='btn btn-mode' onClick={() => {setReset(true); window.localStorage.clear(); window.location.reload()}}>Reset</button>
      </div>
    </header>
  )
}