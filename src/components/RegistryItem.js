import React from 'react'
import { connect } from 'react-redux'

const RegistryItem = (props) => {
  let thisProduct = {...props.products.filter(product => product.id === props.item.prod_id)[0]}
  return (
    <div>
      {thisProduct.prod_name}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(RegistryItem)
