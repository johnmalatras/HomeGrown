import React, { PropTypes } from 'react';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;


const EditItemModal = (props) => {
    var Modal = ReactBootstrap.Modal;

    if (!props.selectedItem) {
        return <div></div>;
    }

    return (
        <Modal show={ props.show } onHide={ () => props.onHide() }>
            <div className="container">
                <h4>Edit Item TEST: {props.selectedItem.title}</h4>
                <div class="container">

                    <ButtonToolbar>
                        <Button onClick={() => props.onHide()}>Close</Button>
                        <Button onClick={() => props.onHide()}>Delete Item</Button>
                    </ButtonToolbar>
                </div>
                <br />
            </div>
        </Modal>
    );
};

export default EditItemModal;