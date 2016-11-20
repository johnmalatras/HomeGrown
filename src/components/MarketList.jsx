import React from 'react';
import MarketItem from './MarketItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const MarketList = (props) => {
	console.log(props.items);
  	const listItems = props.items.map((row) => {
    	return <MarketItem key={row.title} 
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