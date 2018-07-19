import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import OwnerView from './OwnerView'
import OwnerAddList from './OwnerAddList'
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  h1: {
    fontFamily: 'Roboto'
  }
};

class OwnerTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <MuiThemeProvider theme={theme} >
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Your Current Registry" />
            <Tab label="Add More Items" />
          </Tabs>
        </Paper>
        </MuiThemeProvider>
        {this.state.value === 0 ? <OwnerView registry={this.props.registry}/>
        : <OwnerAddList registry={this.props.registry} />}

      </div>
    );
  }
}

export default withStyles(styles)(OwnerTabs);
