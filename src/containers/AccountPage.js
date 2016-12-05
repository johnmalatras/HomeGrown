import React from 'react';
import ActiveOrders from './ActiveOrders';
import CurrentListings from './CurrentListings';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class AccountPage extends React.Component {
    constructor(props) {
        super();
        this.addItem= this.addItem.bind(this);
    }
    addItem(){
        hashHistory.push('/addItem');
    }
    render() {
        const isRestaurant = this.props.userInfo.isRestaurant;
        var currentListingsElement;
        if (isRestaurant === 'false') {
            currentListingsElement =
                <div>
                    <CurrentListings />
                    <Button onClick={() => this.addItem()} >Add Item</Button>
                </div>
        }
        return (
            <div>
                <h1>Account Overview</h1>
                <ActiveOrders />
                {currentListingsElement}
            </div>
        )

    }
}

function mapStateToProps(state) {
  return {
    items: state.activeOrders.items,
    userInfo: state.AuthReducer.userInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);