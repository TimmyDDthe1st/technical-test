import React, { useState } from 'react';
import getImages from '../requests/getImages';

import '../styles/Search.css';

function Search({ setSearchResults }) {
    const [ inputText, setInputText ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(inputText));
    }

    return (
    <>
        <form className="searchContainer"
              onSubmit={handleSubmit}
        >
            <input className="searchInput" 
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                        setInputText(e.target.value);
                    }}
            />
            <button className="submitButton"
                    type="submit"
            >
            Search</button>
        </form>
    </>
    );
  }
  
  export default Search;