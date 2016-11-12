/**
 * Created by alextulenko on 11/11/16.
 */
import React,{ Component, PropTypes }  from 'react';
import { bindActionCreators } from 'redux/lib';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import LoginPage from './LoginPage';
import * as Actions from '../actions/index';

const App = () => (
    <div>
        <LoginPage />
    </div>
)

export default App