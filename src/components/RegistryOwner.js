import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import RegistryOwnerTabs from './RegistryOwnerTabs'

const RegistryOwner = (props) => {
  let currRegistry = {...props.registries.filter(registry => registry.reg_username === props.match.params.user_name)[0]}

  return(
    <div>
      <NavBar profile_pic={currRegistry.reg_profile_pic}/>
      <RegistryOwnerTabs registry={currRegistry}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    registries: state.registries
  }
}

export default connect(mapStateToProps)(RegistryOwner)
