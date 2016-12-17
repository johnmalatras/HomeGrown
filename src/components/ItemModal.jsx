import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');
import moment from 'moment';
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

class ItemModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.verifyBuy = this.verifyBuy.bind(this);
  }

  handleChange(event) {
    const num = parseInt(event.target.value);
    this.setState({value: num});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  verifyBuy() {
    console.log(this.state.value);
    if (this.state.value > this.props.selectedItem.quantity) {
      alert("Quantity entered exceeds what's available!");
    } else if (this.state.value < 1) {
      alert("Can't buy less than one of an item!");
    } else if(isNaN(this.state.value)){
      alert("Can't buy NaN, please select an amount!");
    }
    else {
      var selectedItem = this.props.selectedItem;
      selectedItem.buyerName = this.props.userInfo.businessName;
      var cartAdd = {
        item: selectedItem,
        quantity: this.state.value,
        cart: this.props.cart
      };
      this.props.addToCart(cartAdd);
      this.props.onHide();
      alert(this.props.selectedItem.title + " added to cart!");
    }
    this.setState({value: 0});
  }

  render() {
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;
    var Form = ReactBootstrap.Form;
    var FormGroup = ReactBootstrap.FormGroup;
    var FormControl = ReactBootstrap.FormControl;
    var ControlLabel = ReactBootstrap.ControlLabel;

    const item = this.props.selectedItem;

    if (!this.props.selectedItem) {
      return <div></div>;
    }

  	return (
    	<Modal show={ this.props.show } onHide={ () => this.props.onHide() }>
    		<div className="container">
      	 <h3>{item.title}</h3>
         <h5>Sold by: {item.seller}</h5>
         <p><em>Quantity Available:</em> {item.quantity + " " + item.metric} </p>
         <p><em>Price:</em> {item.price}</p>

         <Form>

          <FormGroup controlId="formInlineQuantity">
            <ControlLabel>Buy Quantity</ControlLabel>
            {"  "}

            <input type="number" placeholder={item.quantity} value={this.state.value} onChange={this.handleChange} max={item.quantity} />
            <p><b>Total:</b> {(this.state.value * item.price).toFixed(2)}</p>
          </FormGroup>

          {"  "}
           <ButtonToolbar>
          <Button onClick={this.verifyBuy}>Buy</Button>
             <Button onClick={() => this.props.onHide()}>Close</Button>
             </ButtonToolbar>
         </Form>

  		   <br />
    		</div>
    	</Modal>
  	);
  }
}

export default ItemModal;