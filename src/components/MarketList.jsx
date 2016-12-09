import React from 'react';
import MarketItem from './MarketItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const MarketList = (props) => {

	var listItemsArray = [];
	for (var key in props.items) {
		// if(key != undefined)
		// {
		// 	console.log("KEY");
		// 	console.log(key);
		// 	props.getImage(key);
		// }
		var item = props.items[key];
    	item.key = key;
		// for (var img in props.itemImages)
		// {
		// 	if(props.itemImages.key == key)
		// 	{
		// 		item.add(props.itemImages[key]);
		// 	}
		// }
    	listItemsArray.push(item);
	}

  	const listItems = listItemsArray.map((row) => {
    	return <MarketItem key={row.key} 
    						item={row}
						    userInfo={props.userInfo}
						    auth = {props.userAuthenticated}
							onItemSelect={ props.onItemSelect } />
  	});

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};

export default MarketList;