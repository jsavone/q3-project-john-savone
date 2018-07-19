import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createGuest } from '../../redux/actions'
import NavBar from '../NavBar'

import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

let suggestions = []

function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const styles = theme => ({
  container: {
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    flexWrap: 'wrap',
    width: 1000
  },

  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 1000,
  },
  menu: {
    width: 1000,
  },
});

class GuestJoin extends React.Component {
  state = {
    registryOwner: '',
    suggestions: [],
    user_name: '',
    pw: '',
    first_name: '',
    last_name: ''
  };

  submitHandler = (event) => {
    let ownerId = {...this.props.registries.filter(registry => registry.reg_username === this.state.registryOwner)[0]}
    let newGuest = {
      guest_username: this.state.user_name,
      guest_pw: this.state.pw,
      guest_reg_id: ownerId.id,
      guest_first_name: this.state.first_name,
      guest_last_name: this.state.last_name,
    }
    this.props.createGuest(newGuest)
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      registryOwner: newValue,
    });
  };

  render() {
    suggestions = []
    this.props.registries.map(registry => {
      return suggestions.push({ label: registry.reg_username })
    })

    const { classes } = this.props;

    return (
      <div>
        <NavBar />
        <MuiThemeProvider theme={theme}>
          <Autosuggest
            theme={{
              container: classes.container,
              suggestionsContainerOpen: classes.suggestionsContainerOpen,
              suggestionsList: classes.suggestionsList,
              suggestion: classes.suggestion,
            }}
            renderInputComponent={renderInput}
            suggestions={this.state.suggestions}
            onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
            renderSuggestionsContainer={renderSuggestionsContainer}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={{
              classes,
              placeholder: 'Search Registry Owners Username',
              value: this.state.registryOwner,
              onChange: this.handleChange,
            }}
          />

          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              required
              id="username"
              label="Username"
              className={classes.textField}
              value={this.state.user_name}
              onChange={(e)=>this.setState({user_name: e.target.value})}
              margin="normal"
            />

            <TextField
              required
              id="password-input"
              label="Password"
              className={classes.textField}
              type="password"
              value={this.state.pw}
              onChange={(e)=>this.setState({pw: e.target.value})}
              margin="normal"
            />

            <TextField
              required
              id="first-name"
              label="First Name"
              className={classes.textField}
              value={this.state.first_name}
              onChange={(e)=>this.setState({first_name: e.target.value})}
              margin="normal"
            />

            <TextField
              required
              id="last-name"
              label="Last Name"
              className={classes.textField}
              value={this.state.last_name}
              onChange={(e)=>this.setState({last_name: e.target.value})}
              margin="normal"
            />
          </form>
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.submitHandler}
          href={`/reg/guest/${this.state.user_name}/${this.state.registryOwner}`}
          >
            Create Registry
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registries: state.registries
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createGuest
}, dispatch)

const GuestJoinConnect = connect(mapStateToProps, mapDispatchToProps)(GuestJoin)

export default withStyles(styles)(GuestJoinConnect);
