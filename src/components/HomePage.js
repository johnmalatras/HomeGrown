/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/LoginPage';
import SignInContainer from '../containers/SignInContainer'
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
        background: '#f6f6f6',
        backgroundSize: 'cover',
        minHeight: '90.5vh',
    },
    form: {
        background: '#white',
        display: 'block',
        margin: 'auto',
        alignItems: 'center'
    },
    text:
    {

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
            <div style={styles.base} xsOffset={3}>
                <Grid>
                    <Row className="show-grid" >
                        <Col sm={12} md={12} xsOffset={3}>
                            <br />
                            <br />
                            <br />
                            <SignInContainer/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Home = Radium(Home);
export default Home;
