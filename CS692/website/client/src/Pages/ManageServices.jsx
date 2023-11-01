import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ServiceCard from '../components/ServiceCard';
import Navbar from '../components/Navbar';
import '../css/ManageServices.css';

const ManageServices = () => {
  const [apiData, setData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');
  
  useEffect(() => {
    axios.get('http://localhost:4000/serviceproviders')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data); // Initialize filteredData with all data
      })
      .catch(error => console.error('Error:', error));
  }, []);

    // Define a function to handle search input changes
    const handleSearch = (event) => {
      const query = event.target.value.toLowerCase();
      setSearchInput(query);
  
      const pattern = new RegExp(query.split(/\s+/).join('|'), 'i');
  
      // Filter apiData based on the search query
      const filtered = apiData
        ? apiData.filter(item => {
            if (!item.FirstName && !item.LastName) return false;
            const fullName = `${item.FirstName} ${item.LastName}`;
            return pattern.test(fullName.toLowerCase());
          })
        : [];
  
      setFilteredData(filtered);
  
      // Update suggestions
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
      setSuggestions([]); // Clear suggestions
    };

  return (
    <>
      <Navbar /><br/><br/>
      <div className="header-container">
          <h2>Service Providers</h2>
        </div>
        {/* Add the search bar at the top */}
        <input className="search-bar"
          type="text"
          placeholder="Search services"
          value={searchInput}
          onChange={handleSearch}
        />
        
        {/* Autocomplete suggestions */}
        {searchInput !== '' && (
          <ul className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <li 
                key={index} 
                onClick={() => handleSuggestionClick(suggestion)} 
                onKeyDown={(event) => { 
                  if(event.key === 'Enter') {
                    handleSuggestionClick(suggestion);
                  } 
                }} 
                role="button"
                tabIndex={0}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        
        {filteredData.map(item => (
            <ServiceCard key={item.id} data={item} />
          ))}

        {/* Map over the apiData */}

        {
          apiData && apiData.map(item => (
            <ServiceCard key={item.id} data={item} />
        ))
        }
  <div className="header-container">
            <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
      </div>
    </>
  );
}

export default ManageServices;
