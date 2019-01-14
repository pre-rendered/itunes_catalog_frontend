import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import styles from './styles';

class SearchResult extends Component {
  handleClick = (ev) => {
    this.props.onFavoriteClick(ev.target.id);
  }

  render() {
    const { classes, item } = this.props;
    const { trackId, trackName, artworkUrl100, trackViewUrl, primaryGenreName } = item;
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
            <Typography component="p">
              Genre: {primaryGenreName}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
              aria-label="Add to favorites"
              id={trackId}
              onClick={this.handleClick}
            >
              <FavoriteBorder color="secondary" />
            </IconButton>
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

export default withStyles(styles)(SearchResult);
