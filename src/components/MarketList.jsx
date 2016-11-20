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

  	const listItems = listItemsArray.map((row) => {
    	return <MarketItem key={row.key} 
    						item={row} 
    						onItemSelect={ props.onItemSelect } />
  	});

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};

export default MarketList;