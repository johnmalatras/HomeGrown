import React from 'react';
import ModalItem from './ActiveOrderModalItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const ActiveOrderModalList = (props) => {

	const listItems = props.items.order.map((row) => {
    	return <ModalItem key={row.title}
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