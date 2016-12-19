/**
 * Created by alextulenko on 11/20/16.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

const validate = (values) => {
    const errors = {};

    if (!values.ProductTitle) {
        errors.ProductTitle = "Please enter an Product Name.";

    }
    if (!values.ProductPrice) {
        errors.ProductPrice = "Please enter an Product Price.";

    } else if((!/^[0-9]+\.[0-9]{1,2}$/i.test(values.ProductPrice))&&((!/^[0-9]{1,8}$/i.test(values.ProductPrice)))){

        errors.ProductPrice = "Please enter an valid price format. (X.XX or X)";
    }
    if (values.ProductImage==undefined) {
        errors.ProductImage = "We require an image to be uploaded with each listing.";

    }
    if (!values.ProductMetric) {
        errors.ProductMetric = "Please enter an Product metric.";

    }
    if (!values.ProductQuantity) {
        errors.ProductQuantity = "Please enter availble quantity.";

    } else if((!/^[0-9]{1,8}$/i.test(values.ProductQuantity))){
        errors.ProductQuantity = "Please enter availble quantity as a number.";
    }
    if(values.ProductImage!=undefined)
    {
        if(values.ProductImage[0]!=undefined)
        {
            if(!(values.ProductImage[0].type.toString() === "image/jpeg"))
            {
                errors.ProductImage = "Please upload either a .jpg or .png.";
            }
        }
    }
    return errors;
};

class AddItemPage extends React.Component {
    constructor(props) {
        super();
        this.addItemMarket= this.addItemMarket.bind(this);
        this.backButton= this.backButton.bind(this);
    }

    addItemMarket(values){
        if(values.Quality == undefined)
        {
            values.Quality = "NA";
        }
        {this.props.actions.addItem(values, this.props.userInfo.ownerName)}
    };

    backButton(){
        browserHistory.push('/account');
    }

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
                    <h3>Notes about listing new item:</h3>
                    <p style={{fontWeight: 'bold'}}>1. Use a descriptive and specific Title. Ex. Appalachian green beans instead of just green beans.</p>
                    <p style={{fontWeight: 'bold'}}>2. The price is on a per unit base</p>
                    <p style={{fontWeight: 'bold'}}>3. The product metric is the increment of amount of product you can buy</p>
                    <p style={{fontWeight: 'bold'}}>4. The product quantity is the amount of units of product you have available for purchase</p>
                    <p style={{fontWeight: 'bold'}}>5. We require you to set the quality of the produce you are offering. Please refer to the about page to better understand our quality scale.</p>
                    <p style={{fontWeight: 'bold'}}>6. Please create a separate listing for each level of quality </p>
                    <p style={{fontWeight: 'bold'}}>7. We require you to submit a product image</p>
                    <form onSubmit={this.props.handleSubmit(this.addItemMarket)}>
                        <Field name="ProductTitle" type="text" component={this.renderField} label="Product Title" />
                        <Field name="ProductPrice" type="text" component={this.renderField} label="Product Price per Unit($)" />
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
                        <button style={{background: '#8DC63F'}} action="submit" className="btn btn-primary">Submit Item</button>
                    </form>
                    <p> </p>
                    <button onClick={() => this.backButton()} >Cancel Add Item</button>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.AuthReducer.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'addItemPage',
    validate
})(AddItemPage));