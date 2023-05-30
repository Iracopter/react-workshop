import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Search from './Components/Search';
import DataList from './Components/DataList';
import React, { useState } from 'react';



function App() {
    const [favorites, setFavorites] = useState([]);
    const handleSaveToFavoriteOther = (title, image, analyzedInstructions) => {
      const newFavorite = { title, image, analyzedInstructions};
      setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
    };
    console.log(favorites);

    const [moreinfo, setMoreinfo]=useState([]);
    const handleGetMoreInfo = (title, image, analyzedInstructions) => {
      const newInfo = { title, image, analyzedInstructions};
      setMoreinfo(prevInfo => [...prevInfo, newInfo]);
    };
    console.log("more:", moreinfo)

  return (
    <div className="App">
      <Search/>
      <DataList handleSaveToFavorite={handleSaveToFavoriteOther} handleMoreInfo={handleGetMoreInfo}/>
    </div>
  );
}

export default App;

