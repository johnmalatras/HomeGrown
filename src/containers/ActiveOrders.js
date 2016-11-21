import React, { PropTypes } from 'react';
import ActiveOrderList from '../components/ActiveOrderList';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class ActiveOrders extends React.Component {

  componentWillMount() {
    this.props.actions.requestActiveOrders();
  }

  render() {
    return (
      <div>
        <h3>Current Inventory</h3>
        <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Metric</th>
                <th>Total</th>
              </tr>
            </thead>
            <ActiveOrderList items={ this.props.items } />
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.activeOrders.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders);