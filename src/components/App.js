import React, { Component } from 'react';
import request from 'superagent';
import {
  AppBar,
  Tab,
  Tabs,
} from '@material-ui/core';
import Searchbar from './search/Searchbar';
import SearchResultList from './search/SearchResultList';
import FavoritesList from './favorites/FavoritesList';
import { removeEmpty, mergeAndDedup } from '../utils/helpers';
import '../styles/App.css';

const uri = `http://localhost:4000/api/search?term=`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      term: '',
      data: {},
      favorites: {},
      tab: 'home',
      isFetching: false,
      noResults: false,
    };
  }

  handleSearchChange = (ev) => {
    const value = ev.target.value;
    this.setState({ term: value });
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { term } = this.state;
    this.setState({
      isFetching: true,
    });

    request(`${uri}${term.trim()}`)
      .then((response) => {
        let noResults = false;
        if (Object.keys(response.body).length === 0) {
          noResults = true;
        }

        this.setState({
          data: response.body,
          isFetching: false,
          noResults,
        });
      })
      .catch((err) => {
        this.setState({
          data: {},
          isFetching: false,
          noResults: true,
        });
        console.log(err);
      });
  }

  handleFavoriteClick = (item) => {
    const { kind } = item;
    let { data, favorites } = this.state;
    const items = data[item.kind];

    const newItems = items.map((result) => {
      if (result.trackId === item.trackId) {
        result = {
          ...result,
          isFavorite: !result.isFavorite,
        }
      }
      return result;
    });

    data[kind] = newItems;
    favorites[kind] = favorites[kind] || [];
    const currentFavorites = favorites[kind];
    
    const newFavorites = newItems.filter((newItem) => {
      return newItem.isFavorite;
    });

    favorites[kind] = mergeAndDedup([currentFavorites, newFavorites]);

    removeEmpty(favorites);

    this.setState({
      data,
      favorites,
    });
  }

  handleTabChange = (ev, newVal) => {
    this.setState({
      tab: newVal,
    });
  }

  render() {
    const { data, term, tab, favorites, isFetching, noResults } = this.state;
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Tabs
            value={tab}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant={null}
          >
            <Tab value="home" label="Home" />
            <Tab value="favorites" label="My Favorites" />
          </Tabs>
        </AppBar>
        {tab === 'home' && 
          <div>
            <Searchbar
              onChange={this.handleSearchChange}
              onSubmit={this.handleSubmit}
              term={term}
            />
            <SearchResultList
              results={data}
              onFavoriteClick={this.handleFavoriteClick}
              isFetching={isFetching}
              noResults={noResults}/>
          </div>
        }
        {tab === 'favorites' && <FavoritesList favorites={favorites} />}
      </div>
    );
  }
}

export default App;
