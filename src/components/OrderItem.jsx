import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const OrderItem = ({item, onItemSelect}) => {
    const rowElement = (
        <tr key={item.title}>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.metric}</td>
            <td>{item.buyer}</td>
        </tr>
    )
    return rowElement;
}

export default OrderItem;