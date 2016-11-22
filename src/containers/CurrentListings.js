import React, { PropTypes } from 'react';
import CLList from '../components/CurrentListingsList.jsx';
import CLModal from '../components/CurrentListingModal.jsx';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class CurrentListings extends React.Component {

  componentWillMount() {
    this.props.actions.requestCurrentListings();
  }

  render() {
    return (
      <div>
        <hr />
        <h3>Current Listings</h3>
        <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Metric</th>
                <th>Quality</th>
              </tr>
            </thead>
            <CLList items={ this.props.items } 
                        onItemSelect={selectedItem => this.props.actions.openCLModal({selectedItem}) }
                        deleteItem={selectedItem => this.props.actions.deleteItem({selectedItem}) }/>
        </Table>
        <CLModal show={this.props.modalIsOpen} 
                  selectedItem={this.props.selectedItem} 
                  onHide={ () => this.props.actions.closeCLModal() } 
                  updateQuantity={(newQuantity, item) => this.props.actions.updateQuantity(newQuantity, {item}) }/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.currentListings.items,
    modalIsOpen: state.currentListingModal.clModalIsOpen,
    selectedItem: state.currentListingModal.clSelectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentListings);