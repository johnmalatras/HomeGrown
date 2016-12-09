/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';
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
var Image = ReactBootstrap.Image;
var Clearfix = ReactBootstrap.Clearfix;

var divStyle =  {
    textAlign: 'center',
    size: 45
};
var imgStyle = {
    //flex: 1,
    justifyContent: 'center',
        alignItems: 'center'
};

class Home extends React.Component {
    constructor(props) {
        super();
        this.TermsOfUse= this.TermsOfUse.bind(this);
    };

    TermsOfUse(){
        browserHistory.push('/terms');
    };

    render() {
        return (
            <div className="container">
                <Grid>
                    <Row>
                        <Col xs={6} md={6} xsOffset={3}><Image style={imgStyle} src="../../RipeNow-Logo.png" responsive /></Col>
                    </Row>
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
                                            <Button onClick={this.TermsOfUse} >Terms of Use</Button>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                        <Clearfix visibleSmBlock></Clearfix>
                        <Col sm={6} md={6}>
                            <div>
                                <h2>Work with RipeNow</h2>
                                <p>If you are a local farmer or resturant in the Raleigh area who is interested
                                in working with or learning more about RipeNow please send an email to ajtulenko@ripenow.co</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


export default Home;
