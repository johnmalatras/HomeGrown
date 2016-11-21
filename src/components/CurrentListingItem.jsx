import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const CurrentListingItem = ({item, onItemSelect, deleteItem}) => {
	const rowElement = (
		<tr key={item.key}>
			<td>{item.title}</td>
			<td>{item.price}</td>
			<td>{item.quantity}</td>
			<td>{item.metric}</td>
			<td>{item.quality}</td>
			<td><Button onClick={() => onItemSelect(item)} >Edit</Button> <Button onClick={() => deleteItem(item)} >Delete</Button></td>
		</tr>
	)
    return rowElement;
}

export default CurrentListingItem;