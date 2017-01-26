import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Image = ReactBootstrap.Image;
import Radium, { Style } from 'radium';
var styles = {
	tag: {
		margin: 'auto',
		verticalAlign: 'middle',
		fontSize: '125%',
	},
	Button: {
		background: '#8DC63F',
		color: 'white',
		borderColor: '#8DC63F',
		fontSize: '125%',
		padding: '10px 20px 10px 20px'
	}
};

function handleImageLoaded() {
	console.log("HIT");
}

var MarketItem = ({item, isRestaurant,image, onItemSelect, auth, canOrder}) => {
	var res = isRestaurant;
	var produceImage;
	produceImage = <Image style={{width: '128px', height: '128px'}}  src={item.downloadURL} rounded />;
	//console.log(item);
	if (auth != false && canOrder) {
		if (res == false) {
			const rowElement = (
				<tr key={item.title}>
					<td style={styles.tag}>{produceImage}</td>
					<td style={styles.tag}>{item.title}</td>
					<td style={styles.tag}>{item.businessName}</td>
					<td style={styles.tag}>{item.price}</td>
					<td style={styles.tag}>{item.metric}</td>
					<td style={styles.tag}>{item.quantity}</td>
					<td style={styles.tag}>{item.quality}</td>
					<td style={styles.tag}> </td>
				</tr>
			)
			return rowElement;
		} else {
			const rowElement = (
				<tr key={item.title}>
					<td>{produceImage}</td>
					<td style={styles.tag}>{item.title}</td>
					<td style={styles.tag}>{item.businessName}</td>
					<td style={styles.tag}>{item.price}</td>
					<td style={styles.tag}>{item.metric}</td>
					<td style={styles.tag}>{item.quantity}</td>
					<td style={styles.tag}>{item.quality}</td>
					<td style={styles.tag}><Button style={styles.Button} onClick={() => onItemSelect(item)}>Buy</Button></td>
				</tr>
			)
			return rowElement;
		}
	}
	else {
		const rowElement = (
			<tr key={item.title}>
				<td style={styles.tag}>{produceImage}</td>
				<td style={styles.tag}>{item.title}</td>
				<td style={styles.tag}>{item.businessName}</td>
				<td style={styles.tag}>{item.price}</td>
				<td style={styles.tag}>{item.metric}</td>
				<td style={styles.tag}>{item.quantity}</td>
				<td style={styles.tag}>{item.quality}</td>
				<td style={styles.tag}> </td>
			</tr>
		)
		return rowElement;
	}
}

MarketItem = Radium(MarketItem);
export default MarketItem;