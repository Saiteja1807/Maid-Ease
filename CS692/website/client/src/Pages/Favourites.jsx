import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FavoriteCards from '../components/FavouriteCards';
import '../css/Favourites.css';

const Favorites = () => {
  const [apiData, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const removeFromFavorites = (favoriteId) => {
    const updatedList = apiData.filter((favorite) => favorite.FavouriteId !== favoriteId);
    setData(updatedList);
  };

  useEffect(() => {
    axios.get('http://localhost:4000/favouriteslist')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchInput(query);
    const pattern = new RegExp(query.split(/\s+/).join('|'), 'i');
    
    const filtered = apiData
      ? apiData.filter(item => {
          if (!item.FirstName && !item.LastName) return false;
          const fullName = `${item.FirstName} ${item.LastName}`;
          return pattern.test(fullName.toLowerCase());
        })
      : [];

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

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    setSearchInput(suggestion);
    setSuggestions([]); 
  };

  return (
    <>
      <Navbar /><br/><br/>
      <div className="header-container">
        <h2>Your Favourites</h2>
      </div>
      <input className="search-bar" type="text" placeholder="Search Favourites" value={searchInput} onChange={handleSearch} />
      {searchInput !== '' && (
        <ul className="favorites-autocomplete-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="favorites-autocomplete-item" onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {filteredData.map(item => (
        <FavoriteCards key={item.id} data={item} onRemove={removeFromFavorites} />
      ))}
      <div className="header-container">
        <p>&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
      </div>
    </>   
  );
}

export default Favorites;
