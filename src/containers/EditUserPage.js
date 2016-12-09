/**
 * Created by alextulenko on 12/7/16.
 */
import React from 'react';
import ActiveOrders from './ActiveOrders';
import CurrentListings from './CurrentListings';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

class EditUserPage extends React.Component {
    constructor(props) {
        super();
        this.updateEmail= this.updateEmail.bind(this);
    }
    updateEmail(value, previousValue) {

    }
    render() {
        return (
            <div>
                <h1>Update: {this.props.parameter}</h1>
                <Grid>
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>Old Value:</p></Col>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>New Value:</p></Col>
                    </Row>
                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>{this.props.userInfo.ownerName}</p></Col>
                        <Col md={6}><Button onClick={() => this.editInfo('ownerName',this.props.userInfo.ownerName)} >Edit Owner Name</Button></Col>
                    </Row>
                    <Row>
                        <Col md={6}><Button onClick={() => this.updateEmail('ownerName',this.props.userInfo.ownerName)} >Edit Owner Name</Button></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

EditUserPage.propTypes = {
    user: PropTypes.object.isRequired,
    parameter: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    updateUserInfo: PropTypes.func.isRequired
};

export default EditUserPage;