import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../search/styles';

class FavoriteItem extends Component {
  render() {
    const { classes, item } = this.props;
    const { artistName, trackName, kind, artworkUrl100, trackViewUrl, primaryGenreName } = item;
    return(
      <Grid item>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={`${trackName} image`}
            width="100"
            className={classes.media}
            image={artworkUrl100}
            title={trackName}
          />
          <CardContent>
            <Typography
              gutterBottom
              className={classes.typographyContent}
            >
              {trackName}
            </Typography>
            <Typography
              gutterBottom
              className={classes.typographyContent}
            >
              {artistName}
            </Typography>
            <Typography component="p">
              Genre: {primaryGenreName}, Type: {kind}
            </Typography>
          </CardContent>
          <CardActions className={classes.favoriteItem}>
            <Link
              href={trackViewUrl}
              target="_blank"
              rel="noopener"
            >
              <Button
                variant="contained"
                size="small"
                color="primary"
              >
                iTunes Link
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(FavoriteItem);
