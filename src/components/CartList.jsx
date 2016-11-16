import React from 'react';
import CartItem from './CartItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

class CartList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {priceTotal: 0, listItems:[], fee: 0, priceSubTotal: 0};

	    this.placeOrder = this.placeOrder.bind(this);
  	}

  	componentWillMount() {
  		var price = 0;
	  	const listItems = this.props.items.map((row) => {
	  		price = +price + +(row[1] * row[0].price).toFixed(2);
	    	return <CartItem key={row[0].title} 
	    						cartItem={row} 
	    						deleteCartItem={this.props.deleteCartItem} 
	    						cart={this.props.items}/>
	  	});
	  	price = price.toFixed(2);
	  	var fee = (price * .25).toFixed(2);
	  	var totalPrice = (+price + +fee).toFixed(2);
	  	this.setState({fee: fee, listItems: listItems, priceSubTotal: price, priceTotal: totalPrice});
  	}

  	placeOrder() {
  		var purchase = {
	        cart: this.props.items,
	        subtotal: this.state.priceSubTotal,
	        fee: this.state.fee,
	        total: this.state.priceTotal
      	};
      	this.props.placeOrder(purchase);
      	alert("Order Placed! Thank you for your business, a RipeNow team member will be contacting you shortly.")
  	}

	render() {

	  	return (
	    	<tbody className="theList">
	        	{this.state.listItems}
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>Subtotal: </td>
					<td>{this.state.priceSubTotal}</td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>Processing fee (25%): </td>
					<td>{this.state.fee}</td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td>Total: </td>
					<td>{this.state.priceTotal}</td>
				</tr>
				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td><Button onClick={this.placeOrder} >Confirm Purchase</Button></td>
				</tr>
			</tbody>
	  	)
  	}
};

export default CartList;