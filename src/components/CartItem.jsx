import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { deleteCartItem } from '../actions/index';

class CartItem extends React.Component {

	constructor(props) {
	    super(props);

	    this.deleteItem = this.deleteItem.bind(this);
  	}

	deleteItem() {
		this.props.deleteCartItem(this.props.cartItem, this.props.cart);
		alert(this.props.cartItem[0].title + " removed from cart!");
	}

	render() {
		const cartItem = this.props.cartItem;
		const rowElement = (
			<tr key={cartItem[0].title}>
				<td>{cartItem[0].title}</td>
				<td>{cartItem[0].seller}</td>
				<td>{cartItem[1]}</td>
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