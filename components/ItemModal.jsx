import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const ItemModal = (props) => {
	var Modal = ReactBootstrap.Modal;

	if (!props.selectedItem) {
		return <div></div>;
	}

  	return (
    	<Modal show={ props.show } onHide={ () => props.onHide() }>
    		<div className="container">
      	 <h3>{props.selectedItem.title}</h3>
			   <Button onClick={() => props.onHide()}>Close</Button>
			   <br />
    		</div>
    	</Modal>
  	);
};

export default ItemModal;