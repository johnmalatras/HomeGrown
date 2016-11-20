import React from 'react';
import { connect } from 'react-redux'
import CartItem from './CartItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class CartList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {priceTotal: 0, listItems:[], fee: 0, priceSubTotal: 0};

	    this.placeOrder = this.placeOrder.bind(this);
  	}

  	placeOrder(subtotal, fee, total) {
  		var purchase = {
	        cart: this.props.cart,
	        subtotal: subtotal,
	        fee: fee,
	        total: total
      	};
      	console.log(purchase);
      	this.props.placeOrder(purchase);
      	alert("Order Placed! Thank you for your business, a RipeNow team member will be contacting you shortly.")
  	}

	render() {
		var price = 0;
	  	const listItems = this.props.cart.map((row) => {
	  		price = +price + +(row[1] * row[0].price).toFixed(2);
	    	return <CartItem key={row[0].title} 
	    						cartItem={row} 
	    						deleteCartItem={this.props.deleteCartItem} 
	    						cart={this.props.cart}/>
	  	});
	  	price = price.toFixed(2);
	  	var fee = (price * .25).toFixed(2);
	  	var totalPrice = (+price + +fee).toFixed(2);
	  	return (
	    	<tbody className="theList">
	        	{listItems}
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>Subtotal: </td>
					<td>{price}</td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>Processing fee (25%): </td>
					<td>{fee}</td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>Total: </td>
					<td>{totalPrice}</td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td><Button onClick={() => this.placeOrder(price, fee, totalPrice)} >Confirm Purchase</Button></td>
				</tr>
			</tbody>
	  	)
  	}
};

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


export default connect(mapStateToProps, mapDispatchToProps)(CartList);