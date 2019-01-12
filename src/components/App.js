import React, { Component } from 'react';
import Searchbar from './search/Searchbar';
import SearchResultList from './search/SearchResultList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <SearchResultList />
      </div>
    );
  }
}

export default App;
