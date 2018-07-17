import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import RegistryList from './RegistryList'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
  display2: {
    marginTop: 20
  }
};

const RegistryGuest = (props) => {

  const { classes } = props;

  let currRegistry = {...props.registries.filter(registry => registry.reg_username === props.match.params.user_name)[0]}
  let currGuest = {...props.guests.filter(guest => guest.guest_username === props.match.params.guest_user_name)[0]}

  if (currRegistry!== undefined && currGuest!== undefined && currRegistry.id !== currGuest.guest_reg_id) {
    console.log("doesn't match")
  }

  return(
    <div>
    <NavBar />
    <Typography variant="display2" gutterBottom className={classes.display2}>
        Hi {currGuest.guest_first_name}
    </Typography>
    <Typography variant="display2" gutterBottom>
        Registry guest for {currRegistry.reg_first_name} {currRegistry.reg_last_name}
      </Typography>
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
