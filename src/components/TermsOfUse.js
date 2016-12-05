/**
 * Created by alextulenko on 12/3/16.
 */
import React from 'react';
var ReactBootstrap = require('react-bootstrap');
import { hashHistory } from 'react-router';
var Button = ReactBootstrap.Button;

class TermsOfUse extends React.Component {
    constructor(props) {
        super(props);
        this.goBack= this.goBack.bind(this);
    };

    goBack() {
        hashHistory.push('/homePage');
    }

    render() {
        return (
            <div>
                <h1>BE EXCELENT TO EACH OTHER</h1>
                <Button onClick={this.goBack} >Go Back</Button>
            </div>
        );
    }
}


export default TermsOfUse;