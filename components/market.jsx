import React from 'react';
import ReactDOM from 'react-dom';
var ReactBootstrap = require('react-bootstrap');
//import FBApp from '../modules/firebase'

import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCMNnrLwBozPpfG8d4YzCi9W334FhcorEg",
    authDomain: "homegrown-65645.firebaseapp.com",
    databaseURL: "https://homegrown-65645.firebaseio.com",
    storageBucket: "homegrown-65645.appspot.com",
    messagingSenderId: "818910687408"
};
var FBApp = firebase.initializeApp(config);

var MarketItems = React.createClass({
	render: function() {
		var marketEntries = this.props.items;

		function createItems(item) {
			const rowElement = (
				<tr key={item.title}>
					<td>{item.title}</td>
					<td>{item.seller}</td>
					<td>{item.price}</td>
					<td>{item.quantity}</td>
					<td>{item.metric}</td>
				</tr>
			)
    		return rowElement
    	}	
 
    	var listItems = marketEntries.map(createItems);

    	return (
			<tbody className="theList">
        		{listItems}
			</tbody>
        );
	}
});

const Market = React.createClass({
	// getInitialState: function() {
	// 	this.firebaseRef = FBApp.database().ref("items");
	// 	this.firebaseRef.on("value", function(snapshot) {
	// 		return snapshot.val();
	// 	}, function (errorObject) {
	// 		console.log("The read failed: " + errorObject.code);
	// 		return null;
	// 	});
 //  	},
	componentWillMount: function() {
		this.firebaseRef = FBApp.database().ref("items");
		this.firebaseRef.on("child_added", function(dataSnapshot) {
			//this.items.push(dataSnapshot.val());
			this.items = dataSnapshot.val();
		    this.setState({
		    	items: this.items
		    });
		}.bind(this), function (errorObject) {
			console.log("The read failed: " + errorObject.code);
			return null;
		});
	},
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
			    	<MarketItems entries={this.items}/>
			  	</Table>
		  	</div>
		);
        return page;
    }
});

export default Market;

ReactDOM.render(<Market/>, document.getElementById('market'));