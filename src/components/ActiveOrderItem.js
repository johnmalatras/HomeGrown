import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var moment = require('moment');
moment().format();
var Button = ReactBootstrap.Button;

const ActiveOrderItem = ({item, onItemSelect}) => {
	var orderDate = moment(item.key.split("_")[1], "x").format("MMM DD YYYY hh:mm a");
	const rowElement = (
		<tr key={item.key}>
			<td>{orderDate}</td>
			<td>{item.order.length}</td>
			<td>{item.total}</td>
			<td><Button onClick={() => onItemSelect(item)} >View</Button></td>
		</tr>
	)
    return rowElement;
}

export default ActiveOrderItem;