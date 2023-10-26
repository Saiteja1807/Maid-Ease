import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import Footer from '../components/Footer';
import FavouritesNavbar from '../components/FavouritesNavbar';
import FavoriteCards from '../components/FavouriteCards';

const Favorites = () => {
  const [apiData, setData] = useState(null);

  const removeFromFavorites = (favoriteId) => {
    // Filter out the removed favorite from the list
    const updatedList = apiData.filter((favorite) => favorite.FavouriteId !== favoriteId);
    setData(updatedList);
  };

  useEffect(() => {
    axios.get('http://localhost:4000/favouriteslist') 
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <FavouritesNavbar/><br /><br />
      <div className="bg-[#672ab2]">
        <div className="container mx-auto text-center py-3">
          <p className="text-sm text-white"><h2>Your Favourites</h2></p>
        </div>
      </div>
      
      {
        apiData && apiData.map(item => ( // Added a check for apiData
          <FavoriteCards key={item.id} data={item} onRemove={removeFromFavorites}/>
        ))
      }
      <br /><br /><br />
      <Footer/>
    </>   
  );
}

export default Favorites;
