import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
import Radium, { Style } from 'radium';

var styles = {
    font: {
        fontFamily: 'Fira Sans',
    }
};

class ItemModal extends React.Component {

  // Value is currently entered quantity
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      priceValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.verifyChange = this.verifyChange.bind(this);
  }

  // For Quantity
  handleChange(event) {
    const num = parseInt(event.target.value);
    this.setState({value: num});
  }

  handlePriceChange(event) {
    const num = parseFloat(event.target.value);
    this.setState({priceValue: num});
  }

  verifyChange() {
    if (this.state.value == '') this.setState({value: this.props.selectedItem.quantity});
    if (this.state.priceValue == '') this.setState({priceValue: this.props.selectedItem.price});

    if (this.state.value < 1 && this.state.value != '') {
      alert("Can't add less than one of an item!");
    } else if (this.state.priceValue < .01 && this.state.priceValue != '') {
      alert("Invalid Price Entered!")
    } else {
      
      if (this.state.value != this.props.selectedItem.quantity && this.state.value != '') {
        this.props.updateQuantity(this.state.value, this.props.selectedItem);
      }

      if (this.state.priceValue != this.props.selectedItem.price && this.state.priceValue != '') {
        this.props.updatePrice(this.state.priceValue, this.props.selectedItem);
      }
      
      this.props.onHide();
      alert(this.props.selectedItem.title + " updated!");
    }
    //this.setState({value: 0});
  }

  render() {
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;

    const item = this.props.selectedItem;

    if (!this.props.selectedItem) {
      return <div></div>;
    }

  	return (
        <Modal style={styles.font} show={ this.props.show } onHide={ () => this.props.onHide() }>
            <div className="container">
                <h3>Edit {item.title} Listing</h3>
                <p>
                    Update Quantity: {" "}
                    <input type="number" placeholder={item.quantity} value={this.state.value}
                           onChange={this.handleChange}/>
                </p>
                <p>
                    Update Price: {" "}
                    <input type="number" placeholder={item.price} value={this.state.priceValue}
                           onChange={this.handlePriceChange}/>
                </p>
                <ButtonToolbar>
                    <Button onClick={this.verifyChange}>Save</Button>
                    <Button onClick={() => this.props.onHide()}>Close</Button>
                </ButtonToolbar>
                <br />
            </div>
    	</Modal>
  	);
  }
}
ItemModal = Radium(ItemModal);
export default ItemModal;