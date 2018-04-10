import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import '../styles/Products.css'


const product = {
  name: 'Mandarins',
  code: 40500,
  photo: "https://makemyvape.co.uk/image/cache/catalog/product/o/r/orange_mandarin_-_tfa-800x800.jpg",
  description: "Tasty fresh Mandarins from Columbia",
  volume: 1000,
  price: 3,
  currency: "USD"
  destination: "Worldwide",
  expiration: "2018-06-06"
}


class Product extends PureComponent {

  render() {

    return(
      <div>
        <h2>{ product.name }</h2>
        <p>Code: { product.code }</p>
        <img src={ product.photo } />
        <p>Expiration Date: { product.expiration }</p>
        
        <p>{ product.description }</p>
        <p>Volume: { product.volume }<p>
        <p>Price: { product.price } { product.currency }</p>
        <p>Shipment Destination: { product.destination }</p>


      </div>
    )
  }

}

export default Product
