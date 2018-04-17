import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProductsList from './ProductsList'
import { fetchMyProducts } from '../../actions/products'
import { fetchUser } from '../../actions/users'
import {jwtPayload} from "../../jwt"
import { Link } from 'react-router-dom'

class MyProducts extends PureComponent {
  state = {}

  componentWillMount(props) {
    this.props.fetchMyProducts(this.props.match.params.id)
    this.props.fetchUser(this.props.match.params.id)
  }


  render() {
    const { products, currentProfileId, user } = this.props
    if (!products) return null
    if (!user) return null

    return(
      <div>
        { currentProfileId === user.id ?
          <h2>My Products</h2> : <h2>{user.name}</h2> }

        { products.length === 0 ?
          <div>
            <p>You currently have no products listed for sale.</p>
          </div> : " " }

        { currentProfileId === user.id ?
          <Link to="/products/new">Add Product</Link> : " " }

        <ProductsList products={ products } />

      </div>
    )
  }
}

const mapStateToProps = function(state) {
  const jwtDecoded = state.currentUser ? jwtPayload(state.currentUser.jwt) : {}
  return {
    products: state.products,
    user: state.user,
    currentUser: state.currentUser,
    currentUserId: jwtDecoded.id,
    currentProfileId: jwtDecoded.profileId
  }
}


export default connect(mapStateToProps, { fetchMyProducts, fetchUser })(MyProducts)
