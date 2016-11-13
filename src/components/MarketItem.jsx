import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const MarketItem = ({item, onItemSelect}) => {
	const rowElement = (
		<tr key={item.title}>
			<td>{item.title}</td>
			<td>{item.seller}</td>
			<td>{item.price}</td>
			<td>{item.quantity}</td>
			<td>{item.metric}</td>
			<td><Button onClick={() => onItemSelect(item)} >View</Button></td>
		</tr>
	)
    return rowElement;
}

export default MarketItem;