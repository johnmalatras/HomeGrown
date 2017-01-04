import React from 'react';
import {connect} from 'react-redux'
import {DateField, Calendar} from 'react-date-picker'
import CartItem from './CartItem.jsx';
import StripeCheckout from 'react-stripe-checkout';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;
var Panel = ReactBootstrap.Panel;
import 'whatwg-fetch'
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

var price;
class CartList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: "",
            listItems: [],
            comment: " ",
            deliveryTime: "10am-11am",
            errorMessage: '',
            deliveryDate: undefined,
            deliveryDateDay: ''
        };
        this.placeOrder = this.placeOrder.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.onToken = this.onToken.bind(this);
        this.canNotOrder = this.canNotOrder.bind(this);
    }

    onToken(token) {
        var useCart;
        if (this.props.selectedCart == 1) {
            useCart = this.props.cart;
        }
        else if (this.props.selectedCart == 2) {
            useCart = this.props.cart2;
        }
        else if (this.props.selectedCart == 3) {
            useCart = this.props.cart3;
        }
        var orderDescription;
        if (useCart.length > 1) {
            orderDescription = useCart.length + " items";
        } else {
            orderDescription = useCart[0][0].title;
        }

        var fee = (price * .25).toFixed(2);
        var totalPrice = (+price + +fee).toFixed(2) * 100;
        var priceDollars = totalPrice / 100;

        token.orderDescription = orderDescription;
        token.orderPrice = totalPrice;

        fetch('http://104.236.192.230/api/chargecard', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                console.log(data);
            });

            var purchase = {
                cart: useCart,
                subtotal: price,
                fee: fee,
                total: priceDollars,
                deliveryDate: this.props.selectedDateMoment.format('YYYY-MM-DD'),
                comment: this.state.comment,
                deliveryTime: this.state.deliveryTime
            };
            console.log("trying to place order");
            this.props.placeOrder(purchase, this.props.cartIndex, this.props.user);
<<<<<<< HEAD
=======
            //alert("Order Placed! Thank you for your business!");
>>>>>>> master
        });

    }

    handleChange(date) {
        var holdDate = date.toString();
        this.setState({
            deliveryDate: date,
            deliveryDateDay: holdDate
        });
    }

    handleTextChange(textComment) {
        this.setState({
            comment: textComment.target.value
        });
    }

    handleTimeChange(textComment) {
        this.setState({
            deliveryTime: textComment
        });
    }

    placeOrder(subtotal, fee, total) {
        var useCart;
        if (this.props.selectedCart == 1) {
            useCart = this.props.cart;
        }
        else if (this.props.selectedCart == 2) {
            useCart = this.props.cart2;
        }
        else if (this.props.selectedCart == 3) {
            useCart = this.props.cart3;
        }

        if (useCart.length == 0) {
            this.setState({
                errorMessage: 'You must have someting in your cart to order.'
            });
            return -1;
        }
        else if (this.state.deliveryDate == undefined) {
            this.setState({
                errorMessage: 'You must select a delivery date.'
            });
            return -1;
        }
        else if (price < 200) {
            this.setState({
                errorMessage: 'You must have at least $200 in your cart.'
            });
            return -1;
        }
        else {
            var purchase = {
                cart: useCart,
                subtotal: subtotal,
                fee: fee,
                total: total,
                deliveryDate: this.props.selectedDateMoment,
                comment: this.state.comment,
                deliveryTime: this.state.deliveryTime
            };
            this.props.placeOrder(purchase);
           // alert("Order Placed! Thank you for your business!")
            return 0;
        }
    }

    //Returns the opposite of what you would think lol
    //true - cant order, false - can order
    canNotOrder() {
        var useCart;
        if (this.props.selectedCart == 1) {
            useCart = this.props.cart;
        }
        else if (this.props.selectedCart == 2) {
            useCart = this.props.cart2;
        }
        else if (this.props.selectedCart == 3) {
            useCart = this.props.cart3;
        }
        if (useCart.length == 0) {
            return true;
        }
        else if(price < 200) {
            return true;
        }
        else {
            return false;
        }
    }

    deleteItem(cartItem, theCart) {

        this.props.deleteCartItem(cartItem, theCart);
        alert(cartItem[0].title + " removed from cart!");
    }

    render() {
        var useCart;
        if (this.props.selectedCart == 1) {
            useCart = this.props.cart;
        }
        else if (this.props.selectedCart == 2) {
            useCart = this.props.cart2;
        }
        else if (this.props.selectedCart == 3) {
            useCart = this.props.cart3;
        }

        var momentArray;
        var localTime = moment(Date.now()).local().format('HH');

        if (localTime < 17) {
            momentArray = [moment().add(1, "days"), moment().add(2, "days"), moment().add(3, "days")];
        }
        else {
            momentArray = [moment().add(2, "days"), moment().add(3, "days")];
        }


        price = 0;
        const listItems = useCart.map((row) => {
            price = +price + +(row[1] * row[0].price).toFixed(2);
            return <CartItem key={row[0].title}
                             cartItem={row}
                             deleteCartItem={this.deleteItem}
                             cart={useCart}/>
        });
        price = price.toFixed(2);
        var fee = (price * .25).toFixed(2);
        var totalPrice = (+price + +fee).toFixed(2);

        var orderDescription;
        if (useCart.length > 1) {
            orderDescription = useCart.length + " items";
        } else if (useCart.length == 0) {
            //Not 100% this is correct but that keeps things interesting
            orderDescription = 'SHOULDNT BE HIT';//this.props.cart[0][0].title;
        }

        var canBuy = this.canNotOrder();
        var errorMessage = 'You are good to order!';
        var colorSelected = '#000000';
        if (canBuy == true) {
            if (useCart.length == 0) {
                errorMessage = 'You must have someting in your cart to order.';
                colorSelected = '#ff0000';
            } else if (price < 200) {
                errorMessage = 'You must have at least $200 in your cart.';
                colorSelected = '#ff0000';
            }
            else {
                errorMessage = 'You are good to order!'
            }
        }
        let date = '2017-04-24';
        return (
            <tbody className="theList">
            {listItems}
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Subtotal:</td>
                <td>{price}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Transportation and Processing fee (25%):</td>
                <td>{fee}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>{totalPrice}</td>
            </tr>
            <tr>

            </tr>
            <tr>
                <th>Comments:</th>
                <td></td>
                <td></td>
                <td></td>
                <th></th>
                <th>Select Delivery Time:</th>
            </tr>

            <td>
                <textarea style={{width: 200, height: 50}} type="textarea" value={this.state.value}
                          onChange={this.handleTextChange}/>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <DropdownButton title={this.state.deliveryTime} onSelect={(evt) => this.handleTimeChange(evt)}>
                    <MenuItem eventKey='8am-10am'>8am-10am</MenuItem>
                    <MenuItem eventKey='10am-11am'>10am-11am</MenuItem>
                </DropdownButton>
            </td>
            <td></td>

            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <StripeCheckout
                        stripeKey="pk_test_BlpgbsPBhVhgFQsfLwUwQWzf"
                        token={this.onToken}
                        image="../../RipeNow_Icon_Small.png"
                        name="RipeNow LLC"
                        description={orderDescription}
                        currency="USD"
                        amount={totalPrice * 100}
                        shippingAddress
                        email={this.props.user.email}
                        disabled={canBuy}
                    >
                    </StripeCheckout>
                </td>
            </tr>
            <tr>
                <Panel>
                    <h3>Why can't I order yet:</h3>
                    <p style={{color: colorSelected}}>{errorMessage}</p>
                </Panel>
            </tr>
            </tbody>
        )
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        cart2: state.cart.cart2,
        cart3: state.cart.cart3,
        selectedCart: state.items.selectedCart,
        user: state.AuthReducer.userInfo,
        selectedDateMoment: state.items.selectedDateMoment
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(CartList);