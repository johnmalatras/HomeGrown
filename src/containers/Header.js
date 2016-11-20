/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {signOutUser} from '../actions/index';
var ReactBootstrap = require('react-bootstrap');
import { hashHistory } from 'react-router';

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
    handleCart(){
        hashHistory.push('/cart');
    }
    handleMarket(){
        hashHistory.push('/');
    }
    handleHolder(){
        hashHistory.push('/account');
    }
    renderAuthLinks() {
        if (this.props.authenticated) {
            return [
                <Navbar inverse collapseOnSelect block fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a><img width="27px" src="../../Diy-Farm-icon.png"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"onClick={() => this.handleMarket()}>Market</NavItem>
                            <NavItem eventKey={2} href="#" onClick={() => this.handleCart()}>Cart</NavItem>
                            <NavItem eventKey={3} href="#" onClick={() => this.handleHolder()}>Account</NavItem>
                            <NavItem eventKey={4} href="#" onClick={() => this.handleSignout()}>Sign Out</NavItem>
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