import React from 'react';
import ActiveOrders from '../containers/ActiveOrders';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { hashHistory } from 'react-router';

class AccountPage extends React.Component {
    constructor(props) {
        super();
        this.addItem= this.addItem.bind(this);
    }
    addItem(){
        hashHistory.push('/addItem');
    }
    render() {
        return (
            <div>
                <h1>Account Overview</h1>
                <hr />
                <ActiveOrders />
                <Button onClick={() => this.addItem()} >Add Item</Button>
            </div>

        )
    }
}

export default AccountPage