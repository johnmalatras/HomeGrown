import React from 'react';
import ActiveOrderItem from './ActiveOrderItem';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const ActiveOrderList = (props) => {

	var listItemsArray = [];
	for (var key in props.items) {
		var item = props.items[key];
    	item.key = key;
    	listItemsArray.push(item);
	}
  	const listItems = listItemsArray.map((row) => {
    	return <ActiveOrderItem key={row.key} 
    						    item={row}
								isRestaurant={props.isRestaurant}
                                onItemSelect={ props.onItemSelect }/>
  	});

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};

export default ActiveOrderList;