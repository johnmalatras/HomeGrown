/**
 * Created by alextulenko on 11/12/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

export default function(WrappedComponent) {
    class Auth extends React.Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                hashHistory.push('/');
            }
        }

        render() {
            return <WrappedComponent {this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.AuthReducer.authenticated };
    }

    return connect(mapStateToProps)(Auth);
}