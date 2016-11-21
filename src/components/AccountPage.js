import React from 'react';
import ActiveOrders from '../containers/ActiveOrders';
import CurrentListings from '../containers/CurrentListings';

class AccountPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Account Overview</h1>
                <hr />
                <ActiveOrders />
                <hr />
                <CurrentListings />
            </div>
        )
    }
}

export default AccountPage