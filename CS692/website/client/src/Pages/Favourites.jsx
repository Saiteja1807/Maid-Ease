import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import Footer from '../components/Footer';
import FavouritesNavbar from '../components/FavouritesNavbar';
import FavoriteCards from '../components/FavouriteCards';

const Favorites = () => {
  const [apiData, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');




  const removeFromFavorites = (favoriteId) => {
    // Filter out the removed favorite from the list
    const updatedList = apiData.filter((favorite) => favorite.FavouriteId !== favoriteId);
    setData(updatedList);
  };

  useEffect(() => {
    axios.get('http://localhost:4000/favouriteslist') 
    .then(response => {
      setData(response.data);
      setFilteredData(response.data); // Initialize filteredData with all data
    })
    .catch(error => console.error('Error:', error));
}, []);


  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    //console.log("Query:", query);
    setSearchInput(query);

    const pattern = new RegExp(query.split(/\s+/).join('|'), 'i');

    // Filter apiData based on the search query
    const filtered = apiData
    ? apiData.filter(item => {
        if (!item.FirstName && !item.LastName) return false;
        const fullName=`${item.FirstName} ${item.LastName}`;
        return pattern.test(fullName.toLowerCase());
      })
    : [];
    //console.log("apiData:", apiData);
    //console.log("filteredData:", filteredData);
    setFilteredData(filtered);
    const suggestionList = apiData
      .filter(item => {
        if (!item.FirstName && !item.LastName) return false;
        const fullName = `${item.FirstName} ${item.LastName}`;
        return fullName.toLowerCase().includes(query);
      })
      .map(item => {
        if (!item.FirstName && !item.LastName) return '';
        return `${item.FirstName} ${item.LastName}`;
      });

    setSuggestions(suggestionList);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchInput(suggestion);
    setSuggestions([]); 



  };
  


  return (
    <>
      <FavouritesNavbar/><br /><br />
      <div className=" bg-[#672ab2]">
        <div className="container mx-auto text-center py-3">
          <p className="text-sm text-white"><h2>Your Favourites</h2></p>
        </div>
      </div>

      <input style={{
    display: 'block',          // Make it a block element
    margin: '0 auto',          // Center horizontally
    marginTop: '20px',         // Add top margin for vertical centering
    width: '95%',              // Adjust the width as needed
    padding: '10px',           // Add some padding
    fontSize: '16px',          // Set the font size
    textAlign: 'left',       // Center the text horizontally
  }} type="text" placeholder="Search Favourites" value={searchInput} onChange={handleSearch}/>

      {/* Autocomplete suggestions */}
      {searchInput !== '' && (
        <ul style={{cursor:'pointer', paddingLeft:'50px' }}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}



      {filteredData.map(item=>(<FavoriteCards key={item.id} data={item} onRemove={removeFromFavorites}/> ))}
      
      
      <br /><br /><br />
      <Footer/>
    </>   
  );
}

export default Favorites;
