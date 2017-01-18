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
var Panel = ReactBootstrap.Panel;

import Radium, { Style } from 'radium'

var divStyle =  {
    textAlign: 'center',
    size: 45
};
var imgStyle = {
    justifyContent: 'center',
        alignItems: 'center'
};

var styles = {
    base: {
        background: '#E3D4B6',
        backgroundSize: 'cover',
    },
    form: {
        background: '#white',
    }
};

class Home extends React.Component {
    constructor(props) {
        super();
        this.TermsOfUse= this.TermsOfUse.bind(this);
        this.About = this.About.bind(this);
    };

    TermsOfUse(){
        browserHistory.push('/terms');
    };

    About(){
        browserHistory.push('/about');
    };

    render() {
        return (
            <div style={styles.base}>
                <Grid>
                    <Row>
                        <Col xs={8} md={8} xsOffset={2}><Image style={imgStyle} src="../../RipeNow-Logo.png" responsive /></Col>
                    </Row>
                    <Row className="show-grid">
                        <Col sm={12} md={12}>
                            <Panel style={styles.form}>
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
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Home = Radium(Home);
export default Home;
