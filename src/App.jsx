import React from 'react';
import './App.scss';
import { Header } from './components/Main/Header';
import { SiteArea } from './components/Main/SiteArea';
import { AddSections } from './components/Main/AddSections.jsx';

function App() {
  const startImg = 'https://cleancharm.ru/assets/img/nophoto.png';
  const [reset, setReset] = React.useState(false); 
  const [edit, setEdit] = React.useState(true);
  const [mode, setMode] = React.useState(edit);
  const [titles, setTitles] = React.useState([]);
  
  let titlesFromStorage = JSON.parse(localStorage.getItem('titles'));

  React.useEffect(() => {
    localStorage.setItem('titles', JSON.stringify(titles));
    console.log(titles);
  }, [titles])

  React.useEffect(() => {
    setTitles(titlesFromStorage === null ?
      [
        {id: 1, order: 1, key: 'Заголовок', title: 'Title'},
        {id: 2, order: 2, key: 'Карточки', 
        cards: [
          {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
          {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
          {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
          {label: 'Card', description: 'Create a custom description for your card', image: startImg, color: '#000000', backgroundColor: '#ffffff'},
        ]
      }
        
      ]
      : titlesFromStorage)
  }, [reset])


  return (
    <div className="App">
      <Header setEdit={setEdit} setMode={setMode} setReset={setReset}/>
      <main className={mode ? 'main' : 'main view-style'}>
        <SiteArea setTitles={setTitles} titles={titles} edit={edit} startImg={startImg} />
        <AddSections titles={titles} setTitles={setTitles} startImg={startImg} />
      </main>
    </div>
  );
}

export default App;
