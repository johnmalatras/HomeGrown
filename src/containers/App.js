/**
 * Created by alextulenko on 11/11/16.
 */
import React,{ Component, PropTypes }  from 'react';
// import { bindActionCreators } from 'redux/lib';
// import { connect } from 'react-redux';
// import SignUp from '../components/SignUp';
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
// import * as Actions from '../actions/index';
// import HomePage from '../components/HomePage';
import { StickyContainer, Sticky } from 'react-sticky';
import Header from '../containers/Header';
import NavBar from '../containers/NavBar';
import Footer from '../containers/Footer';
import Radium from 'radium'

var styles = {
    header: {
        zIndex: '10',
    },
    content: {
        zIndex: '1',
        fontFamily: 'Fira Sans',
    }
};


class App extends React.Component {
    render() {
        return (
            <div>
                <StickyContainer>
                    <Sticky style={styles.header}>
                        <NavBar/>
                    </Sticky>
                    <div style={styles.content}>
                        {this.props.children}
                    </div>
                </StickyContainer>
            </div>
        );
    }
}
App = Radium(App);
export default App;