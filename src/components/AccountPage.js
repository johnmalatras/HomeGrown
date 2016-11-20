import React from 'react';
import ActiveOrders from '../containers/ActiveOrders';

class AccountPage extends React.Component {

    render() {
        return (
            <div>
                <h1>Account Overview</h1>
                <hr />
                <ActiveOrders />
            </div>

        )
    }
}

export default AccountPage