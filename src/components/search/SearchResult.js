import React, { Component } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles';

class SearchResult extends Component {
  render() {
    const { classes, items } = this.props;
    return(
      items.map((item) => {
        const { trackId, trackName, artworkUrl100, trackViewUrl, primaryGenreName } = item;
        return(
          <Card
            key={trackId}
            className={classes.card}
          >
            <CardMedia
              component="img"
              alt={`${trackName} image`}
              width="100"
              className={classes.media}
              image={artworkUrl100}
              title={trackName}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {trackName}
              </Typography>
              <Typography component="p">
                Genre: {primaryGenreName}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
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
        );
      })
    )
  }
}

export default withStyles(styles)(SearchResult);
