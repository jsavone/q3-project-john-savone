import React from 'react'
import { connect } from 'react-redux'
import GuestRegistryItem from './GuestRegistryItem'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const GuestRegistryList = (props) => {

const { classes } = props;

  let registryItems = props.items.filter(item => item.reg_id === props.registry_id && item.status ==="unfulfilled")
      .map(item=> <GuestRegistryItem key={item.id} item={item} guest_id={props.guest_id} registry_id={props.registry_id}/>)
  return(
    <div className={classes.root}>
      <Grid container spacing={24}>
        {registryItems}
      </Grid>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const GuestRegistryListConnect = connect(mapStateToProps)(GuestRegistryList)

export default withStyles(styles)(GuestRegistryListConnect)
