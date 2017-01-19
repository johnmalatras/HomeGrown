/**
 * Created by alextulenko on 1/16/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {signOutUser} from '../actions/index';
import { browserHistory } from 'react-router';
import Radium, { Style } from 'radium';
var ReactBootstrap = require('react-bootstrap');

var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var MenuItem = ReactBootstrap.MenuItem;
var Nav = ReactBootstrap.Nav;
var NavDropdown = ReactBootstrap.NavDropdown;

var styles = {
    base: {
        background: 'white',
        color: '#8DC63F',
        width: '100vw',
        height: '10vh',
        verticalAlign:'center',
        fontFamily: 'Fira Sans',
        margin: '0 auto',
        display:'inLineBlock',
        padding: '7px 32px',
    },
    li: {
        display:'inline',
        verticalAlign:'center',
    },
    li2: {
        display:'inline',
        float: 'right',
        margin: '0 auto',
        verticalAlign:'center',
    },
    img: {
        width: '200px',
        margin: '0 auto',
        verticalAlign:'center',
    },

    button: {
        background: 'white',
        float: 'right',
        backgroundColor: 'white',
        padding: '12px 25px',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderRadius: '25px',
        borderColor: '#8DC63F',
        transitionDuration: '0.1s',
        fontSize: '108%',
        fontFamily: 'Fira Sans',

        ':hover': {
            backgroundColor: 'white',
            borderColor: '#45621d'
        },

        ':active': {
            backgroundColor: '#8DC63F'
        }
    },
    navBar: {
        background: 'white',
        color: '#8DC63F',
        padding: '0px 0px 0 0',
        boxShadow: '0 0 0 0',
        marginBottom: '0',
        width: '100vw'
    },
    label: {
        color: '#8DC63F',
        backgroundColor: 'white',
        fontSize: '108%',
        fontFamily: 'Fira Sans',
    }
};

class NavBar extends React.Component {
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

    handleHome(){
        browserHistory.push('/login');
    }

    handleSignIn(){
        browserHistory.push('/home');
    }
    renderAuthLinks() {
        if (this.props.authenticated) {
            const isRestaurant = this.props.userInfo.isRestaurant;
            if (isRestaurant === 'false') {
                return [
                    <Navbar style={styles.navBar} collapseOnSelect block fluid>
                        <Navbar.Header>
                            <img width="200px" src="../../RipeNow_Small.jpg"/>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#" onClick={() => this.handleMarket()}><a style={styles.label} eventKey={1} href="#" onClick={() => this.handleMarket()}>MARKET</a></NavItem>
                                <NavItem eventKey={2} href="#" onClick={() => this.handleHolder()}><a style={styles.label} eventKey={2} href="#" onClick={() => this.handleHolder()}>ACCOUNT</a></NavItem>
                                <NavItem eventKey={3} href="#" onClick={() => this.handleAbout()}><a style={styles.label} eventKey={3} href="#" onClick={() => this.handleAbout()}>ABOUT</a></NavItem>
                                <NavItem eventKey={4} href="#" onClick={() => this.handleSignout()}><a style={styles.label} eventKey={4} href="#" onClick={() => this.handleSignout()}>SIGN OUT</a></NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                ]
            }else{
                return [
                    <Navbar style={styles.navBar} collapseOnSelect block fluid>
                        <Navbar.Header>
                            <img width="200px" src="../../RipeNow_Small.jpg"/>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#" onClick={() => this.handleMarket()}><a style={styles.label} eventKey={1} href="#" onClick={() => this.handleMarket()}>MARKET</a></NavItem>
                                <NavItem eventKey={2} href="#" onClick={() => this.handleCart()}><a style={styles.label} eventKey={2} href="#" onClick={() => this.handleCart()}>CART: {this.props.selectedDate}</a></NavItem>
                                <NavItem eventKey={2} href="#" onClick={() => this.handleHolder()}><a style={styles.label} eventKey={3} href="#" onClick={() => this.handleHolder()}>ACCOUNT</a></NavItem>
                                <NavItem eventKey={3} href="#" onClick={() => this.handleAbout()}><a style={styles.label} eventKey={4} href="#" onClick={() => this.handleAbout()}>ABOUT</a></NavItem>
                                <NavItem eventKey={4} href="#" onClick={() => this.handleSignout()}><a style={styles.label} eventKey={5} href="#" onClick={() => this.handleSignout()}>SIGN OUT</a></NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                ]
            }

        } else {
            return [
                <Navbar style={styles.navBar} collapseOnSelect block fluid>
                    <Navbar.Header>
                        <img width="200px" src="../../RipeNow_Small.jpg"/>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#" onClick={() => this.handleHome()}><a style={styles.label} href="#" onClick={() => this.handleHome()}>HOME</a></NavItem>
                            <NavItem eventKey={4} href="#" onClick={() => this.handleAbout()}><a style={styles.label} eventKey={4} href="#" onClick={() => this.handleAbout()}>ABOUT</a></NavItem>
                            <button style={styles.button} onClick={() => this.handleSignIn()}>LOGIN</button>
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
        userInfo: state.AuthReducer.userInfo,
        selectedDate: state.items.selectedDate
    }
};
NavBar = Radium(NavBar);
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);