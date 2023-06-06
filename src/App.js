import logo from './logo.svg';
import './App.scss';
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
    const handleSaveToFavoriteOther = (title, image, id, analyzedInstructions) => {
      const newFavorite = { title, image, id, analyzedInstructions};
      setFavorites(prevFavorites => [...prevFavorites, newFavorite]);
      alert("The recipe has been added to favorites");
    };
    console.log(favorites);

    const [moreinfo, setMoreinfo]=useState([]);
    const handleGetMoreInfo = (title, image, id, analyzedInstructions) => {
      const newInfo = { title, image, id, analyzedInstructions};
      setMoreinfo(newInfo);
    };
    console.log("more:", moreinfo)


  return (
    <div className="App">
      {showNewPage ? (
        <div>
          <h1>Favorites</h1>
          {favorites.map((image,index)=>(
                <div key={index} className="datalist-item">
                    <p>{image.title}</p>
                    <img src={image.image}/>
                    <Button onClick={() =>{
                      /*handleGetMoreInfo(image.title, image.image, image.id, [image.analyzedInstructions]);*/
                      /*handleOtherButtonClick(image.title, image.image, image.id, [image.analyzedInstructions])*/
                      /*handleGetMoreInfo(image.title, image.image, image.id, [image.analyzedInstructions])*/
                      handleOtherButtonClick(image.title, image.image, image.id, [image.analyzedInstructions])
                      }}
                      primary>More information</Button>
                </div>
            ))}  
          <Button onClick={handleBackButtonClick} primary className="Backbtn">Back</Button>
        </div>
      ) : showOtherPage ? (
        <div>
          <div className="head">
          <h1>Chosen Recepy Page</h1>
          <button className="fav_button" onClick={handleButtonClick}>Favorites</button>
          </div>
                <div key={moreinfo.index} className="datalist-item">
                    <p>{moreinfo.title}</p>
                    <img src={moreinfo.image}/>
                    {moreinfo.analyzedInstructions[0][0].steps.map((step, index) => (
                      <p key={index}>{step.step}</p>
                    ))}
                    <Button onClick={() => handleSaveToFavoriteOther(moreinfo.title, moreinfo.image, moreinfo.id, "Analyzed Instructions")}
                    primary>Додати до улюблених</Button>
                </div>
          <Button onClick={handleBackButtonClick} primary className="Backbtn">Back</Button>
        </div>
      ) : (
        <div>
          <div className="head">
          <h1>Home page</h1>
          <button className="fav_button" onClick={handleButtonClick}>Favorites</button>
          </div>
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

