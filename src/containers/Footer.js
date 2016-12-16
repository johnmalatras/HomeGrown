/**
 * Created by alextulenko on 12/9/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {signOutUser} from '../actions/index';
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';

var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var MenuItem = ReactBootstrap.MenuItem;
var Nav = ReactBootstrap.Nav;
var Panel = ReactBootstrap.Panel;
var NavDropdown = ReactBootstrap.NavDropdown;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Image = ReactBootstrap.Image;

var divStyle =  {
    textAlign: 'center',
    size: 45
};
var imgStyle = {
    flex: 1,
    justifyContent: 'center',
    align: 'center',
    display: 'flex'
};

class Footer extends React.Component {
    render() {
        return (
            <div></div>
            /*<div className="container">
                <Panel>
                    <Grid>
                        <Row>
                            <Col xs={2} md={2} xsOffset={3}><p> </p></Col>
                            <Col xs={2} md={2}><Image style={imgStyle} src="../../RipeNow-Icon.png" responsive /></Col>
                            <Col xs={2} md={2}><p> </p></Col>
                            {/!*<Col xs={4} md={4} xsOffset={4}><Image style={imgStyle} src="../../RipeNow-Icon.png" responsive /></Col>*!/}
                        </Row>
                        <Row>
                            <Col xs={2} md={2} xsOffset={3}><p>Facebook:</p></Col>
                            <Col xs={2} md={2}><p>Instagram: </p></Col>
                            <Col xs={2} md={2}><p>Twitter: </p></Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} xsOffset={3}><p>2016 © RipeNow LLC. All rights reserved.</p></Col>
                        </Row>
                    </Grid>
                </Panel>
            </div>*/
        );
    }
}

const mapDispatchToProps =  ({
    signOut: signOutUser
});

function mapStateToProps(state) {
    return {
        authenticated: state.AuthReducer.authenticated,
        userInfo: state.AuthReducer.userInfo
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Footer);