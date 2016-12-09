import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var moment = require('moment');
moment().format();
var Button = ReactBootstrap.Button;

const ActiveOrderItem = ({item, onItemSelect,isRestaurant}) => {
	var orderDate = item.deliveryDate.substring(0,15);
	if(isRestaurant)
	{
		orderDate = orderDate + ' ' + item.deliveryTime + 'am';
	}
	else
	{
		orderDate = orderDate + ' 6-8am';
	}
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