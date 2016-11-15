/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {signOutUser} from '../actions/index';
var ReactBootstrap = require('react-bootstrap');

var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var MenuItem = ReactBootstrap.MenuItem;
var Nav = ReactBootstrap.Nav;
var NavDropdown = ReactBootstrap.NavDropdown;

var divStyle =  {
    textAlign: 'center',
    size: 45
};
class Header extends React.Component {
    handleSignout() {
        this.props.signOut();
    }
    renderAuthLinks() {
        if (this.props.authenticated) {
            return [
                <Navbar inverse collapseOnSelect block fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#"><img width="27px" src="../../Diy-Farm-icon.png"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Market</NavItem>
                            <NavItem eventKey={1} href="#" onClick={() => this.handleSignout()}>Sign Out</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            ]
        } else {
            return [

            ]
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthLinks()}
            </div>
        );
    }
}
const mapDispatchToProps =  ({
    signOut: signOutUser
});

function mapStateToProps(state) {
    return {
        authenticated: state.AuthReducer.authenticated
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);