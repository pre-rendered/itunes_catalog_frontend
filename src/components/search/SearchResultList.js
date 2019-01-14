import React, { Component } from 'react';
import {
  Grid,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchResult from './SearchResult';
import styles from './styles';
import { removeDashes, capitalize } from '../../utils/helpers';

class SearchResultList extends Component {
  handleClick = (item) => {
    this.props.onFavoriteClick(item);
  }

  render() {
    const { results, isFetching, noResults } = this.props;

    if (isFetching) {
      return <CircularProgress />;
    }

    if (noResults) {
      return <Typography variant="h5">No results found.</Typography>
    }

    return(
      <div>
        { results && Object.keys(results).length > 0 &&
          <div>
            {Object.keys(results).map((kind, i, arr) => {
              return(
                <div key={`${kind}-wrapper`}>
                  <Typography variant="h4">
                    {(capitalize(removeDashes(kind)))}
                  </Typography>
                  <div
                    key={`${kind}-${i}-container`}
                    style={(i === arr.length - 1) ? styles.cardNoMargin : styles.cardMargin}>
                    <Grid container spacing={16}>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={24}>
                          {results[kind].map((result, j) => {
                            return(
                              <SearchResult
                                key={`${result}-${j}`}
                                item={result}
                                onClick={this.handleClick}
                              />
                            )
                          })}
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(SearchResultList);
