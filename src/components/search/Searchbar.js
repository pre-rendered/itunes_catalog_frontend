import React, { Component } from 'react';
import {
  FormControl,
  InputAdornment,
  TextField
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import styles from './styles';

class Searchbar extends Component {
  render() {
    const { classes, onChange, onSubmit, term } = this.props;
    return(
      <div>
        <form onSubmit={onSubmit}>
          <FormControl>
            <TextField
              id="standard-search"
              label="Search iTunes"
              type="search"
              className={classes.textField}
              margin="normal"
              value={term}
              onChange={onChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Searchbar);
