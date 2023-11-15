import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import AddToCartCards from '../components/AddToCartCards';
import '../css/AddToCart.css'

function AddToCart() {
    const { id } = useParams();
    const [apiData, setData] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState('');
  
    const removeFromAddToCart = (addtocart) => {
      const updatedList = apiData.filter((add) => add.CartDetailId !== addtocart);
      setData(updatedList);
    };
  
    useEffect(() => {
        axios.get(`http://localhost:4000/cartdetails/${id}`)
        .then(response => {
          setData(response.data);
          setFilteredData(response.data);
        })
        .catch(error => console.error('Error:', error));
    }, [id]);
  
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
            <Navbar />
            <br /><br />
            <div className='header-container'>
                <h2>Add to Cart</h2>
            </div>
            <input className="search-bar" type="text" placeholder="Search Add to Cart" value={searchInput} onChange={handleSearch} />
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
        <AddToCartCards key={item.id} data={item} onRemove={removeFromAddToCart} />
      ))}
            <br /><br />
            <div className='header-container'>
                <p className="text-sm text-white">&copy; {new Date().getFullYear()} Developed by MaidEase. All rights reserved.</p>
            </div>
        </>
    );
}

export default AddToCart;
