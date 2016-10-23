import React from 'react';
import ReactDOM from 'react-dom';
var ReactBootstrap = require('react-bootstrap');
var FBDB = require("../modules/firebase.js").FBDB;

var MarketItems = React.createClass({
	render: function() {
		var marketEntries = this.props.entries;

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
	getInitialState: function() {
    	return {
    		items: [{
    			title: "Weed",
    			seller: "John Malatras",
    			price: "250",
    			quantity: "100",
    			metric: "oz"
    		}]
    	};
  	},
	componentWillMount: function() {
		this.firebaseRef = FBDB.ref("items");
		this.firebaseRef.on("child_added", function(dataSnapshot) {
			this.items.push(dataSnapshot.val());
		    this.setState({
		    	items: this.items
		    });
		}.bind(this));
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
			    	<MarketItems entries={this.state.items}/>
			  	</Table>
		  	</div>
		);
        return page;
    }
});

export default Market;

ReactDOM.render(<Market/>, document.getElementById('market'));