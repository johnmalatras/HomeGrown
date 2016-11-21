import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');

class ItemModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.verifyChange = this.verifyChange.bind(this);
  }

  handleChange(event) {
    const num = parseInt(event.target.value);
    this.setState({value: num});
  }

  verifyChange() {
    if (this.state.value < 1) {
      alert("Can't add less than one of an item!");
    } else {
      this.props.updateQuantity(this.state.value, this.props.selectedItem);
      this.props.onHide();
      alert(this.props.selectedItem.title + " quantity updated!");
    }
    this.setState({value: 0});
  }

  render() {
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;

    const item = this.props.selectedItem;

    if (!this.props.selectedItem) {
      return <div></div>;
    }

  	return (
    	<Modal show={ this.props.show } onHide={ () => this.props.onHide() }>
    		<div className="container">
      	 <h4>Edit quantity of {item.title}</h4>
         <p>
            Update Quantity:  {" "}
            <input type="number" placeholder={item.quantity} value={this.state.value} onChange={this.handleChange} />
          </p>
          <Button onClick={this.verifyChange}>Save</Button>  
          <hr />
  		   <Button onClick={() => this.props.onHide()}>Close</Button>
  		   <br />
    		</div>
    	</Modal>
  	);
  }
}

export default ItemModal;