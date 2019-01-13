import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import SearchResult from './SearchResult';

class SearchResultList extends Component {
  render() {
    const { results } = this.props;

    return(
      <div>
        { results && Object.keys(results).length > 0 &&
          <div>
            {Object.keys(results).map((kind, i) => {
              return(
                <div key={`${kind}-wrapper`}>
                  <Typography
                    key={`${kind}-header`}
                    variant="h5"
                  >
                    {kind}
                  </Typography>
                  <SearchResult
                    key={`${kind}-${i}-result`}
                    items={results[kind]}
                  />
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}

export default SearchResultList;
