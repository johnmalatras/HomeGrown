import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

class CartItem extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {};

	    this.deleteItem = this.deleteItem.bind(this);
  	}

	deleteItem() {
		var cartRemove = {
	        item: this.props.cartItem,
	        cart: this.props.cart
      	};
		this.props.deleteCartItem(cartRemove);
		alert(this.props.cartItem[0].title + " removed from cart!");
	}

	render() {
		const cartItem = this.props.cartItem;
		const rowElement = (
			<tr key={cartItem[0].title}>
				<td>{cartItem[0].title}</td>
				<td>{cartItem[0].seller}</td>
				<td>{cartItem[0].quantity}</td>
				<td>{cartItem[0].metric}</td>
				<td>{cartItem[0].price}</td>
				<td>{(cartItem[1] * cartItem[0].price).toFixed(2)}</td>
				<td><Button onClick={this.deleteItem} >Remove</Button></td>
			</tr>
		)
	    return rowElement;
	}
}

export default CartItem;