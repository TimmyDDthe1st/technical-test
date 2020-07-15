import React, { useState } from 'react';
import Search from './Search';
import SearchResults from './SearchResults';

import '../styles/App.css';

function App() {
  const [ searchResults, setSearchResults ] = useState([]);

  searchResults.map(e => console.log(e))
  return (
    <div className="app">
      <img className="logo"
           src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg" 
           alt="Nasa Logo" 
      />
      <Search setSearchResults={setSearchResults}/>
      <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
