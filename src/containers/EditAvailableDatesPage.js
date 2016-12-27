/**
 * Created by alextulenko on 12/19/16.
 */
import React from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as Actions from '../actions';
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Panel = ReactBootstrap.Panel;
var FormControl = ReactBootstrap.FormControl;

class EditAvailableDatesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sundayAvil: false, };
        this.updateAvailability = this.updateAvailability.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    updateAvailability(date, value)
    {
        this.props.actions.updateAvailableDate(date, value, this.props.userInfo.availableDates,this.props.userInfo,this.props.userInfo.items)
    }
    goBack()
    {
        browserHistory.push('/account');
    }
    render() {
        var availableDates = this.props.userInfo.availableDates;
        var sundayButton;
        var mondayButton;
        var tuesdayButton;
        var wednesdayButton;
        var thursdayButton;
        var fridayButton;
        var saturdayButton;

        //There has to be a better way
        for (var i = 0; i < 7; i++) {
            if (availableDates[i].key == 'monday') {
                if (availableDates[i].value == true) {
                    mondayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("monday", false)}>Monday</Button>
                }
                else {
                    mondayButton = <Button onClick={() => this.updateAvailability("monday",true)}>Monday</Button>
                }
            } else if (availableDates[i].key == 'tuesday') {
                if (availableDates[i].value == true) {
                    tuesdayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("tuesday", false)}>Tuesday</Button>
                }
                else {
                    tuesdayButton = <Button onClick={() => this.updateAvailability("tuesday",true)}>Tuesday</Button>
                }
            } else if (availableDates[i].key == 'wednesday') {
                if (availableDates[i].value == true) {
                    wednesdayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("wednesday", false)}>Wednesday</Button>
                }
                else {
                    wednesdayButton = <Button onClick={() => this.updateAvailability("wednesday",true)}>Wednesday</Button>
                }
            } else if (availableDates[i].key == 'thursday') {
                if (availableDates[i].value == true) {
                    thursdayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("thursday", false)}>Thursday</Button>
                }
                else {
                    thursdayButton = <Button onClick={() => this.updateAvailability("thursday",true)}>Thursday</Button>
                }
            }else if (availableDates[i].key == 'friday') {
                if (availableDates[i].value == true) {
                    fridayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("friday", false)}>Friday</Button>
                }
                else {
                    fridayButton = <Button onClick={() => this.updateAvailability("friday",true)}>Friday</Button>
                }
            } else if (availableDates[i].key == 'saturday') {
                if (availableDates[i].value == true) {
                    saturdayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("saturday", false)}>Saturday</Button>
                }
                else {
                    saturdayButton = <Button onClick={() => this.updateAvailability("saturday",true)}>Saturday</Button>
                }
            }else if (availableDates[i].key == 'sunday') {
                if (availableDates[i].value == true) {
                    sundayButton =
                        <Button bsStyle="primary" onClick={() => this.updateAvailability("sunday", false)}>Sunday</Button>
                }
                else {
                    sundayButton = <Button onClick={() => this.updateAvailability("sunday",true)}>Sunday</Button>
                }
            }
        }
        return (
            <div className="container">
                <Panel>
                    <h2>Set your pickup availability</h2>
                    <p>Select the dates that your produce is available to be picked up from the Farmers Marker</p>
                    <p>Blue dates are your available ones</p>
                    <p>Please note you must update your available dates at least three days before they become unavailable to avoid orders on unavailable dates</p>
                    <ButtonToolbar>
                        {sundayButton}
                        {mondayButton}
                        {tuesdayButton}
                        {wednesdayButton}
                        {thursdayButton}
                        {fridayButton}
                        {saturdayButton}
                    </ButtonToolbar>
                </Panel>
                <Button onClick={() => this.goBack()}>Back</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: state.AuthReducer.userInfo,
        emailEditError: state.AccountReducer.emailEditError,
        sunAvail: state.AccountReducer.sunAvail,
        monAvail: state.AccountReducer.monAvail,
        tueAvail: state.AccountReducer.tueAvail,
        wedAvail: state.AccountReducer.wedAvail,
        thurAvail: state.AccountReducer.thurAvail,
        friAvail: state.AccountReducer.friAvail,
        satAvail: state.AccountReducer.satAvail
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EditAvailableDatesPage);