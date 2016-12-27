import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;


function handleImageLoaded() {
	console.log("HIT");
}

var MarketItem = ({item, isRestaurant,image, onItemSelect, auth}) => {
	var res = isRestaurant;
	var produceImage;

	produceImage = <Image style={{width: '128px', height: '128px'}}  src={item.image} rounded />;
	//console.log(item);
	if (auth != false) {
		if (res == false) {
			const rowElement = (
				<tr key={item.title}>
					<td>{produceImage}</td>
					<td>{item.title}</td>
					<td>{item.businessName}</td>
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
					<td>{produceImage}</td>
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
				<td>{produceImage}</td>
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