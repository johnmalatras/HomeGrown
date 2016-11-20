import React from 'react';
import OrderItem from './OrderItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const OrderList = (props) => {
    const listItems = props.items.map((row) => {
        return <OrderItem key={row.title}
                            item={row}
                            onItemSelect={ props.onItemSelect } />
    });

    return (
        <tbody className="theList">
        {listItems}
        </tbody>
    );
};

export default OrderList;