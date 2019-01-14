import React, { Component } from 'react';
import {
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../search/styles';
import FavoriteItem from './FavoriteItem';

class FavoritesList extends Component {
  render() {
    const { classes, favorites } = this.props;
    const exists = favorites && Object.keys(favorites).length > 0;
    let favs = [];

    if (exists) {
      Object.keys(favorites).map((kind, i, arr) => {
        return favorites[kind].forEach((favorite) => {
          favs.push(favorite);
        });
      });
    }

    return(
      <div>
        { exists &&
          <div className={classes.marginTop10}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={24}>
                  {
                    favs.map((favorite) => {
                      const { trackId } = favorite;
                      return (
                        <FavoriteItem
                          key={`favorite-${trackId}`}
                          item={favorite}
                        />
                      )
                    })
                  }
                </Grid>
              </Grid>
            </Grid>
          </div>
        }
      </div>
    );
  }
}

export default withStyles(styles)(FavoritesList);
