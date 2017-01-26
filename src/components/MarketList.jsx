import React from 'react';
import MarketItem from './MarketItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

var MarketList = (props) => {
	var listItems = null;
	if(props.items)
	{
		var listItemsArray = [];
		for (var key in props.items[0]) {
			var item =key;
			//item.key = key;
			listItemsArray.push(item);
		}
		console.log("LISTITEMS");
		console.log(props.items);
		var isAuth = props.userAuthenticated;
		var isRestaurant = false;
		if(props.userInfo != undefined)
		{
			if(props.userInfo.isRestaurant == "true")
			{
				isRestaurant = true;
			}
		}
		else {
			isRestaurant = false;
		}
		if(props.userInfo) {

			listItems = props.items.map((row) => {
				return <MarketItem key={row.key}
								   item={row}
								   image={row.image}
								   isRestaurant={isRestaurant}
								   canOrder={props.userInfo.isAccountFinished}
								   auth={isAuth}
								   onItemSelect={ props.onItemSelect }/>
			});
		}
		else {
			//console.log("props.items");
			//console.log(props.items);
			listItems = props.items.map((row) => {
				return <MarketItem key={row.key}
								   item={row}
								   image={row.image}
								   isRestaurant={false}
								   canOrder={false}
								   auth={isAuth}
								   onItemSelect={ props.onItemSelect }/>
			});
		}

	}

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};

export default MarketList;