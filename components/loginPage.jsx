/**
 * Created by wic on 10/22/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
var ReactBootstrap = require('react-bootstrap');

var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var HelpBlock = ReactBootstrap.HelpBlock;
var Col = ReactBootstrap.Col;
var Form = ReactBootstrap.Form;
var Checkbox = ReactBootstrap.Checkbox;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Row = ReactBootstrap.Row;
var Grid = ReactBootstrap.Grid;
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

var SignUp = require('./signUp.jsx');

class LoginPage extends React.Component {
    render() {
        var divStyle = {
            textAlign: 'center',
            size: 45
        };

        return(
            <div>
                <h1 style={divStyle}>RipeNow</h1>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={6}>
                            <SignUp/>
                        </Col>
                        <Col sm={6} md={6}>
                            <div>
                                <h1>About RipeNow</h1>
                                <p>What is RipeNow? Uber for Plants? Maybe but think again.</p>
                                <p>How do I do a newline character in JSX</p>
                                <p>aysadbasdsd
                                    dsadsad
                                    adsadada</p>
                                <p>asd</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;