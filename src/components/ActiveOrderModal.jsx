import React, { PropTypes } from 'react';
import ModalList from './ActiveOrderModalList.jsx';
var ReactBootstrap = require('react-bootstrap');

class ActiveOrderModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var Modal = ReactBootstrap.Modal;
    var Button = ReactBootstrap.Button;
    var Form = ReactBootstrap.Form;
    var FormGroup = ReactBootstrap.FormGroup;
    var FormControl = ReactBootstrap.FormControl;
    var ControlLabel = ReactBootstrap.ControlLabel;
    var Table = ReactBootstrap.Table;

    const item = this.props.selectedItem;

    if (!this.props.selectedItem) {
      return <div></div>;
    }

  	return (
    	<Modal show={ this.props.show } onHide={ () => this.props.onHide() }>
    		<div >
      	 <Table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Metric</th>
                <th>Total</th>
              </tr>
            </thead>
            <ModalList items={item}
                       onHide={this.props.onHide}/>
          </Table>
    		</div>
    	</Modal>
  	);
  }
}

export default ActiveOrderModal;