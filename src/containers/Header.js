/**
 * Created by alextulenko on 11/12/16.
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
        browserHistory.push('/cart');
    }
    handleMarket(){
        browserHistory.push('/');
    }
    handleHolder(){
        browserHistory.push('/account');
    }
    handleAbout(){
        browserHistory.push('/about');
    }
    renderAuthLinks() {
        if (this.props.authenticated) {
            const isRestaurant = this.props.userInfo.isRestaurant;
            console.log(isRestaurant);

            if (isRestaurant === 'false') {
                return [
                    <Navbar  collapseOnSelect block fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a><img width="27px" src="../../RipeNow-Icon.png"/></a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#"onClick={() => this.handleMarket()}>Market</NavItem>
                                <NavItem eventKey={2} href="#" onClick={() => this.handleHolder()}>Account</NavItem>
                                <NavItem eventKey={3} href="#" onClick={() => this.handleAbout()}>About</NavItem>
                                <NavItem eventKey={4} href="#" onClick={() => this.handleSignout()}>Sign Out</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                ]
            }else{
                return [
                    <Navbar  collapseOnSelect block fluid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a><img width="27px" src="../../RipeNow-Icon.png"/></a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#"onClick={() => this.handleMarket()}>Market</NavItem>
                                <NavItem eventKey={2} href="#" onClick={() => this.handleCart()}>Cart</NavItem>
                                <NavItem eventKey={3} href="#" onClick={() => this.handleHolder()}>Account</NavItem>
                                <NavItem eventKey={4} href="#" onClick={() => this.handleAbout()}>About</NavItem>
                                <NavItem eventKey={5} href="#" onClick={() => this.handleSignout()}>Sign Out</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                ]
            }

        } else {
            return [
                <Navbar  collapseOnSelect block fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a><img width="27px" src="../../RipeNow-Icon.png"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#"onClick={() => this.handleMarket()}>Market</NavItem>
                            <NavItem eventKey={4} href="#" onClick={() => this.handleAbout()}>About</NavItem>
                            <NavItem eventKey={5} href="#" onClick={() => this.handleSignout()}>Sign In/Up</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
        authenticated: state.AuthReducer.authenticated,
        cart: state.cart.cart,
        userInfo: state.AuthReducer.userInfo
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);