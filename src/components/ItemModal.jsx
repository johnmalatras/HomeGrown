import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');

class ItemModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
         <hr />
         <p><em>Quantity Available:</em> {item.quantity + " " + item.metric} </p>
         <p><em>Price:</em> {item.price}</p>

         <Form inline>

          <FormGroup controlId="formInlineQuantity">
            <ControlLabel>Buy Quantity</ControlLabel>
            {"  "}
            <input type="number" placeholder="100" value={this.state.value} onChange={this.handleChange} />
            <p><b>Total:</b> {this.state.value * item.price}</p>
          </FormGroup>

          {"  "}

          <Button type="submit">Buy</Button>  
         </Form>

  		   <Button onClick={() => this.props.onHide()}>Close</Button>
  		   <br />
    		</div>
    	</Modal>
  	);
  }
}

export default ItemModal;