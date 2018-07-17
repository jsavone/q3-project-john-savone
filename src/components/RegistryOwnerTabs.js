import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RegistryOwnerView from './RegistryOwnerView'

const styles = {
  root: {
    flexGrow: 1,
  },
  h1: {
    fontFamily: 'Roboto'
  }
};

class RegistryOwnerTabs extends React.Component {
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

        {this.state.value === 0 ? <RegistryOwnerView registry={this.props.registry}/> : null}

        <h1 className={classes.h1}>Registry owned by {this.props.registry.reg_first_name} {this.props.registry.reg_last_name}</h1>
      </div>
    );
  }
}

export default withStyles(styles)(RegistryOwnerTabs);
