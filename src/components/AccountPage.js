import React from 'react';
import ActiveOrders from '../containers/ActiveOrders';
<<<<<<< HEAD
import CurrentListings from '../containers/CurrentListings';
=======
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { hashHistory } from 'react-router';
>>>>>>> master

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
<<<<<<< HEAD
                <hr />
                <CurrentListings />
=======
                <Button onClick={() => this.addItem()} >Add Item</Button>
>>>>>>> master
            </div>
        )
    }
}

export default AccountPage