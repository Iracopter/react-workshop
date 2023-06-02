import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Search from './Components/Search';
import DataList from './Components/DataList';
import React, { useState } from 'react';
import {Loader, Button} from 'semantic-ui-react';



function App() {
    const [showNewPage, setShowNewPage] = useState(false);
    const [showOtherPage, setShowOtherPage] = useState(false);

    const handleButtonClick = () => {
      setShowNewPage(true);
      setShowOtherPage(false);
    };

    const handleOtherButtonClick = () => {
      setShowNewPage(false);
      setShowOtherPage(true);
    };

    const handleBackButtonClick = () => {
      setShowNewPage(false);
      setShowOtherPage(false);
    };


    const [favorites, setFavorites] = useState([]);
    const handleSaveToFavoriteOther = (title, image, analyzedInstructions) => {
      const newFavorite = { title, image, analyzedInstructions};
      setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
    };
    console.log(favorites);

    const [moreinfo, setMoreinfo]=useState([]);
    const handleGetMoreInfo = (title, image, analyzedInstructions) => {
      const newInfo = { title, image, analyzedInstructions};
      setMoreinfo(newInfo);
    };
    console.log("more:", moreinfo)

    function showAlert() {
      alert("The recipe has been added to favorites");
    }

  return (
    <div className="App">
      <Button onClick={handleButtonClick}>Favorites</Button>
      <Button onClick={handleOtherButtonClick}>lalla</Button>
      {showNewPage ? (
        <div>
          <h1>Favorites</h1>
          {favorites.map((image,index)=>(
                <div key={index} className="datalist-item">
                    <p>{image.title}</p>
                    <img src={image.image}/>
                    <Button onClick={() =>{
                  handleOtherButtonClick(image.title, image.image, "Analyzed Instructions")}}/>
                </div>
            ))}  
          <Button onClick={handleBackButtonClick}>Back</Button>
        </div>
      ) : showOtherPage ? (
        <div>
          <h1>Chosen Recepy Page</h1>
                <div key={moreinfo.index} className="datalist-item">
                    <p>{moreinfo.title}</p>
                    <img src={moreinfo.image}/>
                    {moreinfo.analyzedInstructions[0][0].steps.map((step, index) => (
                      <p key={index}>{step.step}</p>
                    ))}
                    <Button onClick={() => handleSaveToFavoriteOther(moreinfo.title, moreinfo.image, "Analyzed Instructions")}>Додати до улюблених</Button>
                </div>
          <Button onClick={handleBackButtonClick}>Back</Button>
        </div>
      ) : (
        <div>
          <h1>Home page</h1>
          <Search/>
          <DataList handleSaveToFavorite={handleSaveToFavoriteOther} 
                    handleMoreInfo={handleGetMoreInfo}
                    handleOtherButtonClick={handleOtherButtonClick}/>
        </div>
      )}
    </div>
  );
}

export default App;

