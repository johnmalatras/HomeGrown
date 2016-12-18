import React from 'react';
import MarketItem from './MarketItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const MarketList = (props) => {

	var listItemsArray = [];
	for (var key in props.items) {
		var item = props.items[key];
    	item.key = key;
    	listItemsArray.push(item);
	}
	console.log(props.userInfo);
	var isAuth = props.userAuthenticated;
	var isRestaurant = false;
	if(props.userInfo != undefined)
	{
		console.log("HIT USERINFO");
		console.log(props.userInfo.isRestaurant);
		if(props.userInfo.isRestaurant == 'true')
		{
			console.log("HIT HERE");
			isRestaurant = true;
		}
	}
	else {
		isRestaurant = false;
	}
  	const listItems = listItemsArray.map((row) => {
    	return <MarketItem key={row.key} 
    						item={row}
						    isRestaurant={isRestaurant}
						    auth = {isAuth}
							onItemSelect={ props.onItemSelect } />
  	});

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};

export default MarketList;