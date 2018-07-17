import React from 'react'
import { connect } from 'react-redux'
import RegistryItem from './RegistryItem'

const RegistryList = (props) => {
  let registryItems = props.items.filter(item => item.reg_id === props.registry_id)
      .map(item=> <RegistryItem key={item.id} item={item}/>)
  return(
    <div>
      {registryItems}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(RegistryList)
