/**
 * Created by alextulenko on 11/1/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
//import '../styles/app.css';
import SignUpPage from './SignUpPage.jsx';
import LoginPage from './LoginPage.jsx';
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

var divStyle =  {
    textAlign: 'center',
    size: 45
};

class Home extends React.Component {

    handleChange(e) {
        this.setState({ value: e.target.value });
    };

    fieldGroup(){
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl type={props.type} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
    };

    render() {
        return (
        <div>
            <h1 style={divStyle}>RipeNow</h1>
            <Grid>
                <Row className="show-grid">
                    <Col sm={6} md={6}>
                        <div>
                            <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                                <Tab eventKey={1} title="Sign In">
                                    <div>
                                        <LoginPage/>
                                    </div>
                                </Tab>
                                <Tab eventKey={2} title="Sign Up">
                                    <div>
                                        <SignUpPage/>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
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

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
