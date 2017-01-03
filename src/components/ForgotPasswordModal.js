import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

class ForgotPasswordModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    this.props.forgotPassword(this.state.value);
    this.props.onHide();
  }

  render() {
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;
    var Form = ReactBootstrap.Form;
    var FormGroup = ReactBootstrap.FormGroup;
    var FormControl = ReactBootstrap.FormControl;
    var ControlLabel = ReactBootstrap.ControlLabel;

  	return (
    	<Modal show={ this.props.show } onHide={ () => this.props.onHide() }>
    		<div className="container">
      	 <h3>Forgot your password?</h3>
         <Form>
          <FormGroup controlId="formInlineQuantity">
            <ControlLabel>Email</ControlLabel>
            {"  "}
            <input type="email" value={this.state.value} onChange={this.handleChange} />
          </FormGroup>
          {"  "}
           <ButtonToolbar>
             <Button onClick={this.handleSubmit}>Submit</Button>
             <Button onClick={() => this.props.onHide()}>Close</Button>
           </ButtonToolbar>
         </Form>

  		   <br />
    		</div>
    	</Modal>
  	);
  }
}

export default ForgotPasswordModal;