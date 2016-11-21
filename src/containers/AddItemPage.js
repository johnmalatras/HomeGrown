/**
 * Created by alextulenko on 11/20/16.
 */
import React, { PropTypes } from 'react';
import MarketList from '../components/MarketList.jsx';
import ItemModal from '../components/ItemModal.jsx';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

class AddItemPage extends React.Component {
    constructor(props) {
        super();
        this.addItem= this.addItem.bind(this);
    }

    addItem(values){
        {this.props.addItemToStore(values)}
        console.log(values);
    };

    renderField({input, label, type, meta: {touched, error}}){
        return(
            <fieldset className="form-group">
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} className="form-control" type={type} />
                    {touched && error && <span>{error}</span>}
                </div>
            </fieldset>
        )
    };

    render() {
        return(
            <div className="container">
                <div >
                    <form onSubmit={this.props.handleSubmit(this.addItem)}>
                        <Field name="ProductTitle" type="text" component={this.renderField} label="Product Title" />
                        <Field name="ProductPrice" type="text" component={this.renderField} label="Product Price per Unit" />
                        <Field name="ProductMetric" type="text" component={this.renderField} label="Product Unit" />
                        <Field name="ProductQuantity" type="text" component={this.renderField} label="Units of Product Avaliable" />
                        <fieldset className="form-group">
                            <label>Quality</label>
                            <div>
                                <Field name="Quality" component="select">
                                    <option value="NA">Not Applicable</option>
                                    <option value="EQ">Extra Quality</option>
                                    <option value="Q">Quality</option>
                                    <option value="Bulk">Bulk</option>
                                </Field>
                            </div>
                        </fieldset>
                        <Field name="ProductImage" type="file" component={this.renderField} label="Product Image" />
                        <button action="submit" className="btn btn-primary">Submit Item</button>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);