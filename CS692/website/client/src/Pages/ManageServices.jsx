import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import ServiceNavbar from '../components/ServiceNavbar';

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
      <ServiceNavbar /><br /><br />
      <div className="bg-[#672ab2]">
        <div className="container mx-auto text-center py-3">
          <p className="text-sm text-white"><h2>Household Services</h2></p>
        </div>
      </div>

      {/* Add the search bar at the top */}
      <input style={{
    display: 'block',          // Make it a block element
    margin: '0 auto',          // Center horizontally
    marginTop: '20px',         // Add top margin for vertical centering
    width: '95%',              // Adjust the width as needed
    padding: '10px',           // Add some padding
    fontSize: '16px',          // Set the font size
    textAlign: 'left',       // Center the text horizontally
  }}
        type="text"
        placeholder="Search services"
        value={searchInput}
        onChange={handleSearch}
      />
      
      {/* Autocomplete suggestions */}
      {searchInput !== '' && (
        <ul style={{cursor:'pointer', paddingLeft:'50px' }}>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)} onKeyDown={(event)=>{ if(event.key==='Enter'){
              handleSuggestionClick(suggestion);
            }
            }} role ="button"
            tabIndex={0}
            style={{cursor:'pointer'}}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      {/* Map over the filteredData instead of apiData */}
      {filteredData.map(item => (
        <ServiceCard key={item.id} data={item} />
      ))}
      <br /> <br /> <br />

      {
        apiData && apiData.map(item => ( // Added a check for apiData
          <ServiceCard key={item.id} data={item}/>
        ))
      }
      <br /><br /><br />
      <Footer/>
    </>
  );
}

export default ManageServices;




