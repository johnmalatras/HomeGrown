import React, { PropTypes } from 'react';
import ActiveOrderList from '../components/ActiveOrderList';
import ActiveOrderModal from '../components/ActiveOrderModal.jsx';
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
      var dateLabel = 'Pick-up Date';
    var isRestaurant;
    if (this.props.userInfo.isRestaurant == true) {
        isRestaurant = true;
    } else{
        isRestaurant = false;
        dateLabel = 'Pick-up Date';
    }
    
    return (
      <div>
        <h3>Active Orders</h3>
        <Table responsive>
            <thead>
              <tr>
                <th>{dateLabel}</th>
                <th>Order Date</th>
                <th>Items</th>
                <th>Total</th>
              </tr>
            </thead>
            <ActiveOrderList items={ this.props.items } 
                             onItemSelect={selectedItem => this.props.actions.openActiveOrderModal({selectedItem}) }
                             isRestaurant={isRestaurant} />
        </Table>
        <ActiveOrderModal show={this.props.modalIsOpen}
                   selectedItem={this.props.selectedItem}
                   onHide={ () => this.props.actions.closeActiveOrderModal() } 
                   isRestaurant={isRestaurant} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.activeOrders.items,
    modalIsOpen: state.activeOrderModal.aoModalIsOpen,
    selectedItem: state.activeOrderModal.aoSelectedItem,
    userInfo: state.AuthReducer.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders);