import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const ActiveOrderItem = ({item}) => {
	const rowElement = (
		<tr key={item.key}>
			<td>{item.title}</td>
			<td>buyer</td>
			<td>{item.price}</td>
			<td>{item.quantity}</td>
			<td>total</td>
		</tr>
	)
    return rowElement;
}

export default ActiveOrderItem;