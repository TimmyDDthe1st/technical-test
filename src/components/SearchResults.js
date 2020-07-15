import React from 'react';

import '../styles/SearchResults.css';

function SearchResults({ results }) {
    if(!results.length) {
        return <p>No results...</p>
    }

    return (
        <>
        <div className="searchResultsContainer">
            {results.map((image) => (
                <img key={image} className="cardImage" src={image} alt="Space"/>
            ))}
        </div>
        </>
    );
  }
  
  export default SearchResults;