import React from 'react';
import ReactDOM from 'react-dom';
var ReactBootstrap = require('react-bootstrap');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
//import FBApp from '../modules/firebase'

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};
firebase.initializeApp(config);
var db = firebase.database();
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


const MarketItem = ({item, onItemSelect}) => {
	const rowElement = (
		<tr key={item.title}>
			<td>{item.title}</td>
			<td>{item.seller}</td>
			<td>{item.price}</td>
			<td>{item.quantity}</td>
			<td>{item.metric}</td>
			<td><Button onClick={() => onItemSelect(item)}>View</Button></td>
		</tr>
	)
    return rowElement;
}


const MarketList = (entries) => {
  	const listItems = entries.map((row) => {
    	return <MarketItem key={row.title} item={row} onItemSelect={props.onItemSelect} />
  	});

  	return (
    	<tbody className="theList">
        	{listItems}
		</tbody>
  	);
};


class Market extends React.Component {

 //  	constructor(props) {
 //  		super(props);
 //  		this.state = {
 //  			items: [
 //  				{
 //  					title: "Broccoli",
 //  					seller: "John M",
 //  					price: "15",
 //  					quantity: "28",
 //  					metric: "gram"
 //  				}
 //  			],
	// 		selectedItem: null,
 //      		modalIsOpen: false
 //  		}
	// }

	// componentWillMount() {
	// 	// var ref = db.ref("items");
	// 	// ref.on("value", function(snapshot) {
	// 	// 	console.log(snapshot.val());
	// 	//   	this.setState({
	// 	//   		items: snapshot.val()
	// 	//   	});
	// 	// }, function (errorObject) {
	// 	//   	console.log("The read failed: " + errorObject.code);
	// 	// });
	// }

	/*
	openModal(item) {
	    this.setState({
	      	modalIsOpen: true,
	      	selectedItem: item
	    });
  	}

  	closeModal() {
    	this.setState({
      		modalIsOpen: false,
      		selectedItem: null
    	});
  	}
  	*/

	render() {
    	var Table = ReactBootstrap.Table;
    	const page = (
    		<div>
    			<h1>Current Inventory</h1>
			 	<Table responsive>
			   		<thead>
			     		<tr>
			        		<th>Item</th>
			        		<th>Seller</th>
			        		<th>Price</th>
			        		<th>Quantity</th>
			        		<th>Metric</th>
			      		</tr>
			    	</thead>
			    	<MarketList entries={this.props.items} />
			  	</Table>
			  	{/* <ItemModal show={this.state.modalIsOpen} selectedItem={this.state.selectedItem} onHide={ () => this.closeModal() } />*/}
		  	</div>
		);
        return page;
    }
}

function mapStateToProps(state) {
	return {
		items: state.items
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Market);

//ReactDOM.render(<Market/>, document.getElementById('market'));