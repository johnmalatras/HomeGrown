import React from 'react';
import ModalItem from './ActiveOrderModalItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const ActiveOrderModalList = (props) => {
	var i = -1;
	const listItems = props.items.order.map((row) => {
		i += 1;
    	return <ModalItem key={row[i].key}
    					  item={row} 
                		  order={ props.items }
                		  isRestaurant={props.isRestaurant} />
  	});

  	return (
    	<tbody className="theList">
        {listItems}
		  </tbody>
  	);
};

export default ActiveOrderModalList;