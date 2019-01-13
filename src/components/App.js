import React, { Component } from 'react';
import request from 'superagent';
import Searchbar from './search/Searchbar';
import SearchResultList from './search/SearchResultList';
import '../styles/App.css';

const uri = `http://localhost:4000/api/search?term=`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      data: {}
    };
  }

  handleSearchChange = (ev) => {
    const value = ev.target.value;
    this.setState({ term: value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { term } = this.state;
    request(`${uri}${term}`)
      .then((response) => {
        this.setState({
          data: response.body,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data, term } = this.state;
    return (
      <div className="App">
        <Searchbar
          onChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
          term={term}
        />
        <SearchResultList results={data} />
      </div>
    );
  }
}

export default App;
