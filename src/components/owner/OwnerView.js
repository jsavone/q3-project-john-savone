import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OwnerItem from './OwnerItem'
import OwnerNotifications from './OwnerNotifications'
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  heading: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

const OwnerView = (props) => {

const { classes } = props;

  let addedAvailProducts = props.items.filter(item => item.reg_id === props.registry.id && item.status === 'unfulfilled').map(item=> <OwnerItem key={item.id} item={item} guest_id={0} fulfilled={0} />)

  let addedFulProducts = props.items.filter(item => item.reg_id === props.registry.id && item.status !== 'unfulfilled').map(item=> <OwnerItem key={item.id} item={item} guest_id={0} fulfilled={1}/>)

  let currNotifications = props.notifications.filter(notif => notif.notif_reg_id === props.registry.id)

  return (

    <div className={classes.root}>
    {currNotifications.length > 0 ? <OwnerNotifications registry={props.registry}/> : null}
      <Typography variant="display1" className={classes.heading} gutterBottom>
       Currently Available Registry Items
     </Typography>

      <Grid container spacing={24}>
        {addedAvailProducts}
      </Grid>

      <Typography variant="display1" className={classes.heading} gutterBottom>
       Fulfilled Registry Items
     </Typography>

      <Grid container spacing={24}>
        {addedFulProducts}
      </Grid>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items,
    notifications: state.notifications
  }
}

const OwnerViewConnect = connect(mapStateToProps)(OwnerView)

export default withStyles(styles)(OwnerViewConnect)
