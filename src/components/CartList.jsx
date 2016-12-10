import React from 'react';
import { connect } from 'react-redux'
import { DateField, Calendar } from 'react-date-picker'
import CartItem from './CartItem.jsx';
import StripeCheckout from 'react-stripe-checkout';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var DropdownButton  = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
import 'whatwg-fetch'
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

var price;
class CartList extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {priceTotal: 0, listItems:[], fee: 0, priceSubTotal: 0,comment:"",deliveryTime:"10-11", errorMessage:'',deliveryDate: undefined, deliveryDateDay: ''};
	    this.placeOrder = this.placeOrder.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
  	}

  	onToken(token){
  		console.log(token);
	    fetch('/save-stripe-token', {
	      method: 'POST',
	      body: JSON.stringify(token),
	    }).then(response => {
	      response.json().then(data => {
	        alert(`We are in business, ${data.email}`);
	      });
	    });
  	}

	handleChange(date) {
		var holdDate =date.toString();
		this.setState({
			deliveryDate: date,
			deliveryDateDay:holdDate
		});
	}

	handleTextChange(textComment)
	{
		this.setState({
			comment: textComment
		});
	}
	handleTimeChange(textComment)
	{
		this.setState({
			deliveryTime: textComment
		});
	}

  	placeOrder(subtotal, fee, total) {
		if(this.props.cart.length == 0)
		{
			this.setState({
				errorMessage: 'You must have someting in your cart to order.'
			});
		}
		else if(this.state.deliveryDate == undefined)
		{
			this.setState({
				errorMessage: 'You must select a delivery date.'
			});
		}
		else if(price < 200)
		{
			this.setState({
				errorMessage: 'You must have at least $200 in your cart.'
			});
		}
		else {
			var purchase = {
				cart: this.props.cart,
				subtotal: subtotal,
				fee: fee,
				total: total,
				deliveryDate: this.state.deliveryDateDay,
				comment: this.state.comment,
				deliveryTime: this.state.deliveryTime
			};
			this.props.placeOrder(purchase);
			alert("Order Placed! Thank you for your business!")
		}
  	}

  	deleteItem(cartItem, theCart){
		this.props.deleteCartItem(cartItem, theCart);
		alert(cartItem[0].title + " removed from cart!");
	}

	render() {
		price = 0;
	  	const listItems = this.props.cart.map((row) => {
	  		price = +price + +(row[1] * row[0].price).toFixed(2);
	    	return <CartItem key={row[0].title} 
	    						cartItem={row} 
	    						deleteCartItem={this.deleteItem}
	    						cart={this.props.cart}/>
	  	});
	  	price = price.toFixed(2);
	  	var fee = (price * .25).toFixed(2);
	  	var totalPrice = (+price + +fee).toFixed(2);
	  	var orderDescription;

	  	if (this.props.cart.length > 1) {
	  		orderDescription = this.props.cart.length + " items";
	  	} else {
	  		orderDescription = this.props.cart[0][0].title;
	  	}

	  	let date = '2017-04-24';
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

				</tr>
				<tr>
					<th>Deliver Comments: </th>
					<td> </td>
					<td> </td>
					<td> </td>
					<th>Select Delivery Date:</th>
					<th>Select Delivery Time:</th>
				</tr>

					<td>
						<textarea style={{width: 200, height: 50}} type="textarea" value={this.state.value} onChange={this.handleTextChange} />
					</td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td><DatePicker
						selected={this.state.deliveryDate}
						onChange={this.handleChange}
						includeDates={[moment().add(1, "days"), moment().add(2, "days"), moment().add(3, "days"), moment().add(4, "days"), moment().add(5, "days"), moment().add(6, "days")]}
						placeholderText="Select Delivery Date" />
					</td>
					<td>
						<DropdownButton title={this.state.deliveryTime} onSelect={(evt) => this.handleTimeChange(evt)}>
							<MenuItem eventKey='8am-10am'>8am-10am</MenuItem>
							<MenuItem eventKey='10am-11am'>10am-11am</MenuItem>
						</DropdownButton>
					</td>
					<td> </td>

				<tr>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<td> </td>
					<StripeCheckout
					  stripeKey="pk_test_BlpgbsPBhVhgFQsfLwUwQWzf"
					  token={this.onToken}  
					  image="../../RipeNow_Icon_Small.png"
					  name="RipeNow LLC"
					  description={orderDescription}
					  currency="USD"
					>
					</StripeCheckout>
					<td><Button onClick={() => this.placeOrder(price, fee, totalPrice)} >Confirm Purchase</Button></td>
				</tr>
				<tr>
					{this.state.errorMessage}
				</tr>
			</tbody>
	  	)
  	}
};

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    user: state.AuthReducer.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CartList);