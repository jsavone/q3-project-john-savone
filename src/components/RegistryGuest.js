import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import RegistryList from './RegistryList'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
  descText: {
    paddingTop: 5,
    paddingBottom: 5,
  },
desc: {
  marginTop: 10,
  textAlign: 'center',
},
bigAvatar: {
  margin: '0 auto',
  width: 60,
  height: 60,
},

};

const RegistryGuest = (props) => {

  const { classes } = props;

  let currGuest = {...props.guests.filter(guest => guest.guest_username === props.match.params.guest_user_name)[0]}

  let currRegistry = {...props.registries.filter(registry => registry.id === currGuest.guest_reg_id)[0]}

  return(
    <div>
    <NavBar profile_pic={currGuest.guest_profile_pic}/>
    <Paper className={classes.desc}>
    <Avatar alt="Remy Sharp" src={currRegistry.reg_profile_pic} className={classes.bigAvatar} />
      <Typography variant="title" gutterBottom className={classes.descText}>
          Message from {currRegistry.reg_first_name} {currRegistry.reg_last_name}
      </Typography>
      <Typography variant="subheading" gutterBottom className={classes.descText}>
        {currRegistry.reg_description}
      </Typography>
    </Paper>
    <RegistryList registry_id={currRegistry.id} guest_id={currGuest.id}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    registries: state.registries,
    guests: state.guests
  }
}

const RegistryGuestConnect = connect(mapStateToProps)(RegistryGuest)

export default withStyles(styles)(RegistryGuestConnect)
