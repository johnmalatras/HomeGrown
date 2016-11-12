/**
 * Created by alextulenko on 11/11/16.
 */
import React,{ Component, PropTypes }  from 'react';
import { bindActionCreators } from 'redux/lib';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import * as Actions from '../actions/index';
import HomePage from '../components/HomePage';
//
// const App = () => (
//     <div>
//         <HomePage />
//     </div>
// )
//
// export default App

export default class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
