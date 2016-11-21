import React from 'react';
import CurrentListingItem from './CurrentListingItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const CurrentListingsList = (props) => {

	var listItemsArray = [];
	for (var key in props.items) {
		var item = props.items[key];
    item.key = key;
    listItemsArray.push(item);
	}

	const listItems = listItemsArray.map((row) => {
  	return <CurrentListingItem key={row.key} 
  						item={row} 
  						onItemSelect={ props.onItemSelect } />
	});

	return (
  	<tbody className="theList">
        	{listItems}
	</tbody>
	);
};

export default CurrentListingsList;