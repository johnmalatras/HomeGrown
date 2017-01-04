import React, { PropTypes } from 'react';
import CartList from '../components/CartList.jsx';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import moment from 'moment';

class Cart extends React.Component {


  render() {
      var cartList;
      var cartIndex;
      if(moment(this.props.selectedDateMoment).isSame(moment().add(1, "days"), 'day'))
      {
        cartIndex = 1;
      }
      else if(moment(this.props.selectedDateMoment).isSame(moment().add(2, "days"), 'day'))
      {
          cartIndex = 2;
      }
      else if(moment(this.props.selectedDateMoment).isSame(moment().add(3, "days"), 'day'))
      {
          cartIndex = 3;
      }

    return (
      <div>
        <h1>Cart</h1>
        <h3>Ordering for: {this.props.selectedDate}</h3>
        <h5>Please note that we have a minimum purchase amount of $200</h5>
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
            <CartList cartIndex={cartIndex}
                deleteCartItem={(selectedItem, cart) => this.props.actions.deleteCartItem({selectedItem}, this.props.selectedCart, {cart}) }
                       placeOrder={(order,cartIndex, user) => this.props.actions.placeOrder({order},{cartIndex}, {user}) }/>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        cart2: state.cart.cart2,
        cart3: state.cart.cart3,
        selectedCart: state.items.selectedCart,
        selectedDate: state.items.selectedDate,
        selectedDateMoment: state.items.selectedDateMoment
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);