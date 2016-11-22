/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
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
var Image = ReactBootstrap.Image;

var divStyle =  {
    textAlign: 'center',
    size: 45
};
var imgStyle = {

};

class Home extends React.Component {

    render() {
        return (
            <div>
                <Image class="col-md-6 col-md-offset-3" src="../../RipeNow-Logo_Website.png" responsive />
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
                                <p>RipeNow aims to change the way local resturants</p>
                                <p>connect to local farmers. Chefs are given the ability </p>
                                <p>to order a higher quality of produce through RipeNow.</p>
                                <p>Local farms benifit by an expansion in the demand for</p>
                                <p>their goods.</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


export default Home;
