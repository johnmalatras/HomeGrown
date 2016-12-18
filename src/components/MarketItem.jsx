import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;

const MarketItem = ({item, isRestaurant, onItemSelect, auth}) => {
	var res = isRestaurant;
	//console.log(isRestaurant);
	if (auth != false) {
		console.log("RES");
		console.log(res);
		if (res == false) {
			const rowElement = (
				<tr key={item.title}>
					<td><Image src={item.image} responsive/></td>
					<td>{item.title}</td>
					<td>{item.seller}</td>
					<td>{item.price}</td>
					<td>{item.metric}</td>
					<td>{item.quantity}</td>
					<td>{item.quality}</td>
					<td> </td>
				</tr>
			)
			return rowElement;
		} else {
			const rowElement = (
				<tr key={item.title}>
					<td><Image src={item.image} responsive/></td>
					<td>{item.title}</td>
					<td>{item.seller}</td>
					<td>{item.price}</td>
					<td>{item.quantity}</td>
					<td>{item.metric}</td>
					<td>{item.quality}</td>
					<td><Button onClick={() => onItemSelect(item)}>View</Button></td>
				</tr>
			)
			return rowElement;
		}
	}
	else {
		const rowElement = (
			<tr key={item.title}>
				<td><Image src={item.image} responsive/></td>
				<td>{item.title}</td>
				<td>{item.seller}</td>
				<td>{item.price}</td>
				<td>{item.metric}</td>
				<td>{item.quantity}</td>
				<td>{item.quality}</td>
				<td> </td>
			</tr>
		)
		return rowElement;
	}
}

export default MarketItem;