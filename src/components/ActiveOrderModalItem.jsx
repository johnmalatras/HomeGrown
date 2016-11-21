import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const MarketItem = ({item, order}) => {
	const rowElement = (
		<tr key={item[0].title}>
			<td>{item[0].title}</td>
			<td>{item[0].price}</td>
			<td>{item[1]}</td>
			<td>{item[0].metric}</td>
			<td>{(item[0].price * item[1]).toFixed(2)}</td>
		</tr>
	)
    return rowElement;
}

export default MarketItem;