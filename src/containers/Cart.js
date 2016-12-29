import React, { PropTypes } from 'react';
import CartList from '../components/CartList.jsx';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class Cart extends React.Component {

  render() {
    return (
      <div>
        <h1>Cart</h1>
          <h3>Notes about ordering:</h3>
          <p style={{fontWeight: 'bold'}}>Please note that we have a minimum purchase amount of $200</p>
          <p style={{fontWeight: 'bold'}}>You must select a delivery date at least one day in advance</p>
          <p style={{fontWeight: 'bold'}}>Please note you must order before 5pm for next day delivery</p>
        <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Seller</th>
                <th>Quantity</th>
                <th>Metric</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <CartList deleteCartItem={(selectedItem, cart) => this.props.actions.deleteCartItem({selectedItem}, {cart}) } 
                       placeOrder={(order, user) => this.props.actions.placeOrder({order}, {user}) }/>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);