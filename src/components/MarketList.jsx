import React from 'react';
import MarketItem from './MarketItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

var MarketList = (props) => {
	var listItems = null;
	if(props.items)
	{
		var listItemsArray = [];
		for (var key in props.items) {
			var item = props.items[key];
			item.key = key;
			if(!props.items[key].image)
			{

			}
			else
			{
				item.image = props.items[key].image;
			}
			listItemsArray.push(item);
		}
		var isAuth = props.userAuthenticated;
		var isRestaurant = false;
		if(props.userInfo != undefined)
		{
			if(props.userInfo.isRestaurant == true)
			{
				isRestaurant = true;
			}
		}
		else {
			isRestaurant = false;
		}
		listItems = listItemsArray.map((row) => {
			return <MarketItem key={row.key}
							   item={row}
							   image={row.image}
							   isRestaurant={isRestaurant}
							   auth = {isAuth}
							   onItemSelect={ props.onItemSelect }/>
		});

	}

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};

export default MarketList;