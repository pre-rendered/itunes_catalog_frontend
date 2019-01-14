import React, { Component } from 'react';
import {
  Grid,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FavoriteItem from './FavoriteItem';
import styles from '../search/styles';
import { removeDashes, capitalize } from '../../utils/helpers';

class FavoritesList extends Component {
  render() {
    const { favorites } = this.props;

    return(
      <div>
        { favorites && Object.keys(favorites).length > 0 &&
          <div>
            {Object.keys(favorites).map((kind, i, arr) => {
              return(
                <div key={`favorites-${kind}-wrapper`}>
                  <Typography variant="h4">
                    {(capitalize(removeDashes(kind)))}
                  </Typography>
                  <div style={(i === arr.length - 1) ? styles.cardNoMargin : styles.cardMargin}>
                    <Grid container spacing={16}>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={24}>
                          {favorites[kind].map((favorite) => {
                            const { trackId } = favorite;
                            return(
                              <FavoriteItem
                                key={`favorite-${trackId}`}
                                item={favorite}
                              />
                            );
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

export default withStyles(styles)(FavoritesList);
