import React, { PropTypes } from 'react';
import MarketList from '../components/MarketList.jsx';
import ItemModal from '../components/ItemModal.jsx';
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
            <MarketList items={ this.props.items } 
                        onItemSelect={selectedItem => this.props.actions.openCLModal({selectedItem}) }/>
        </Table>
        <ItemModal show={this.props.modalIsOpen} 
                  selectedItem={this.props.selectedItem} 
                  onHide={ () => this.props.actions.closeCLModal() } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.currentlistings.items,
    modalIsOpen: state.clmodal.clModalIsOpen,
    selectedItem: state.clmodal.clSelectedItem
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentListings);