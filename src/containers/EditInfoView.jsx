import React, { PropTypes } from 'react';
import EditInfo from '../components/profileEditInfo.jsx';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import {openEditModal} from '../actions/index';
import {submitUpdateModal} from '../actions/index';
import EditModal from '../components/EditModal.jsx';


class EditInfoView extends React.Component {
    /*componentWillMount() {
        this.props.actions.updateInfo();
    }*/

    /*handleChange(event) {
        const val = "newTestVal";
        this.setState({value: val});
    }*/

    render() {
        console.log(this.props);
        return (
            <div>
                <EditInfo updated={this.props.updated}  onUpdateUser={() => this.props.actions.openEditModal() }  />
                <EditModal show={this.props.modalIsOpen}
                           onSubmit={this.props.actions.submitUpdateModal}
                           //onChange={this.handleChange()}
                           value={this.props.value}
                           onHide={ () => this.props.actions.closeModal()}
                           user= {this.props.user} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        updated: state.update.updated,
        modalIsOpen: state.editModal.modalIsOpen,
        user: state.update.user,
        value: state.update.value,
        //submitModal: submitUpdatedInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

EditInfoView.propTypes = {
    updated: PropTypes.bool.isRequired,
    user: {
        username: PropTypes.string.isRequired,
        business: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    },
    //onUpdateUser: PropTypes.func.isRequired,
    //value: PropTypes.string.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfoView);

/*import { connect } from 'react-redux'
import {updateInfo} from '../actions/index.js';
import CurrentInfo from '../components/profileEditInfo.jsx';

const mapStateToProps = (state) => {
    return {
        updated: state.updateReducer.updated,
        user: state.updateReducer.user
    }
};

const mapDispatchToProps =  ({
    onUpdate: updateInfo
});

const CurrentInfoPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentInfo);

export default CurrentInfoPage*/