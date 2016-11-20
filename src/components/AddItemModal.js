/**
 * Created by alextulenko on 11/17/16.
 */
import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

var ReactBootstrap = require('react-bootstrap');
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var option = ReactBootstrap.option;

const validate = (values) => {
    const errors = {};

    if (!values.ProductTitle) {
        errors.ProductTitle = "Please enter an Item Title.";

    }
    if (values.ProductImage != undefined) {
        //console.log(values.ProductImage[0].type);
        if(values.ProductImage[0].type != undefined){
            console.log(values.ProductImage[0].type.toString());
            if(!(values.ProductImage[0].type.toString() == 'image/png' || (values.ProductImage[0].type.toString() == 'image/jpg'))){
                errors.ProductImage = "Please submit either a .jpg or .png.";
            }
        }
    }
    if(!values.ProductImage){
        errors.ProductImage = "We require an image to be uploaded with the product.";
    }
    if (!values.ProductPrice) {
        errors.ProductPrice = "Please enter a Product Price.";

    }
    if (!values.ProductMetrix) {
        errors.ProductMetrix = "Please enter a Product Metrix.";

    }
    if (!values.ProductQuantity) {
        errors.ProductQuantity = "Please enter maximum avalible quantity.";

    }
    if(!values.Quality){

    }
    return errors;
};

class AddItemModal extends React.Component {
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

AddItemModal.propTypes = {
    addItemToStore : PropTypes.func.isRequired
}

export default(reduxForm({
    form: 'addItemModal',
    validate
})(AddItemModal));

