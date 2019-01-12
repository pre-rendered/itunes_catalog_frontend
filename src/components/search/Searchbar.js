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
  componentWillMount() {
    this.setState({
      term: '',
    });
  }

  handleSearchChange = (ev) => this.updateSearchTerm(ev);

  updateSearchTerm = (ev) => {
    const value = ev.target.value;
    this.setState({ term: value });
  }

  render() {
    const { classes } = this.props;
    const { term } = this.state;
    return(
      <div>
        <FormControl>
          <TextField
            id="standard-search"
            label="Search iTunes"
            type="search"
            className={classes.textField}
            margin="normal"
            value={term}
            onChange={this.handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(Searchbar);
