import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'

const RegistryOwner = (props) => {
  let currRegistry = {...props.registries.filter(registry => registry.reg_username === props.match.params.user_name)[0]}
  console.log("This Registry", currRegistry)
  return(
    <div>
      <NavBar />
      <h1>Registry owned by {currRegistry.reg_first_name} {currRegistry.reg_last_name}</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    registries: state.registries
  }
}

export default connect(mapStateToProps)(RegistryOwner)
