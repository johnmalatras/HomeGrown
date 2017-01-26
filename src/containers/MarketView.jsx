import React, { PropTypes } from 'react';
import MarketList from '../components/MarketList.jsx';
import ItemModal from '../components/ItemModal.jsx';
import { connect } from 'react-redux';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Table = ReactBootstrap.Table;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Grid = ReactBootstrap.Grid;
var Col = ReactBootstrap.Col;
var Row = ReactBootstrap.Row;
var Panel = ReactBootstrap.Panel;
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import 'whatwg-fetch'
import moment from 'moment';
import Radium, { Style } from 'radium';

var styles = {
    base: {
        fontFamily: 'Fira Sans',
        zIndex: "1"
    },
    selectedButton: {
        background: '#8DC63F',
        color: 'white',
        borderColor: '#8DC63F',
    },
    label: {
        fontSize: '125%',
    }
};

var errorMessage;

class MarketView extends React.Component {
    componentWillMount() {
        //this.props.actions.updateItems();
        var date = moment().add(1, "days");
        this.changeSelectedDate = this.changeSelectedDate.bind(this);
        this.orderItem = this.orderItem.bind(this);
        if(this.props.userInfo)
        {
            this.props.actions.getItemsInArea(this.props.userInfo.cords,45);
        }
    }

    changeSelectedDate(date, dateMoment, cartIndex) {
        this.props.actions.setSelectedDate(date, dateMoment, cartIndex);
    }

    orderItem(cartAdd, selectedCart) {
        if (selectedCart == 1) {
            var localTime = moment(Date.now()).local().format('HH');
            if (localTime < 17) {
                errorMessage = "You can not order for next day after 5pm, please refresh the page"
            }
            else {
                this.props.actions.addToCart(cartAdd, selectedCart);
            }
        }
        else {
            this.props.actions.addToCart(cartAdd, selectedCart);
        }
    }

    render() {
        if(this.props.userInfo && this.props.items.length == 0)
        {
            this.props.actions.getItemsInArea(this.props.userInfo.cords,45);
        }
        var dateSelector;
        var dateCart;
        var selectedCart = 1;
        var items = this.props.items;
        var items_selectedDate = JSON.parse(JSON.stringify(items));
        if (this.props.selectedDateMoment) {
            for (var i = 0; i < items.length; i++) {
                var isIn = false;
                for (var t = 0; t < 7; t++) {
                    //console.log(items[i].availableDates[t].value);
                    if (items[i].availableDates[t].key == this.props.selectedDateMoment.format('dddd').toLowerCase()) {
                        if (items[i].availableDates[t].value) {
                            isIn = true;
                        }
                    }
                }
                if (!isIn) {
                    delete items_selectedDate[i];
                }
            }
            //console.log(items_selectedDate);
            var localTime = moment(Date.now()).local().format('HH');
            if (localTime < 17) {
                var date = moment().add(1, "days");
                var day1 = date.local().format('dddd');
                var date1 = moment().add(2, "days");
                var day2 = date1.local().format('dddd');
                var date2 = moment().add(3, "days");
                var day3 = date2.local().format('dddd');
                var holdDate = this.props.selectedDateMoment.format('dddd').toLowerCase();
                var Button1;
                var Button2;
                var Button3;
                if (holdDate == day1.toLowerCase()) {
                    selectedCart = 1;
                    dateCart = this.props.cart;
                    Button1 = <Button style={styles.selectedButton}
                                      onClick={() => this.changeSelectedDate(day1, date, 1)}>{day1}</Button>;
                    Button2 = <Button onClick={() => this.changeSelectedDate(day2, date1, 2)}>{day2}</Button>;
                    Button3 = <Button onClick={() => this.changeSelectedDate(day3, date2, 3)}>{day3}</Button>;
                }
                else if (holdDate == day2.toLowerCase()) {
                    selectedCart = 2;
                    dateCart = this.props.cart2;
                    Button1 = <Button onClick={() => this.changeSelectedDate(day1, date, 1)}>{day1}</Button>;
                    Button2 = <Button style={styles.selectedButton}
                                      onClick={() => this.changeSelectedDate(day2, date1, 2)}>{day2}</Button>;
                    Button3 = <Button onClick={() => this.changeSelectedDate(day3, date2, 3)}>{day3}</Button>;
                }
                else if (holdDate == day3.toLowerCase()) {
                    selectedCart = 3;
                    dateCart = this.props.cart3;
                    Button1 = <Button onClick={() => this.changeSelectedDate(day1, date, 1)}>{day1}</Button>;
                    Button2 = <Button onClick={() => this.changeSelectedDate(day2, date1, 2)}>{day2}</Button>;
                    Button3 = <Button style={styles.selectedButton}
                                      onClick={() => this.changeSelectedDate(day3, date2, 3)}>{day3}</Button>;
                }
                dateSelector =
                    <Grid>
                        <Panel>
                            <Row>
                                <Col md={6}>
                                    <h3>Select your delivery date:</h3>
                                    <ButtonToolbar>
                                        {Button1}
                                        {Button2}
                                        {Button3}
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Panel>
                    </Grid>
                ;
            }
            else {
                var date1 = moment().add(2, "days");
                var day2 = date1.local().format('dddd');
                var date2 = moment().add(3, "days");
                var day3 = date2.local().format('dddd');
                var holdDate = this.props.selectedDateMoment.format('dddd').toLowerCase();
                var Button2;
                var Button3;

                if (holdDate == day2.toLowerCase()) {
                    selectedCart = 2;
                    dateCart = this.props.cart2;
                    Button2 = <Button style={styles.selectedButton}
                                      onClick={() => this.changeSelectedDate(day2, date1, 2)}>{day2}</Button>;
                    Button3 = <Button onClick={() => this.changeSelectedDate(day3, date2, 3)}>{day3}</Button>;
                }
                else if (holdDate == day3.toLowerCase()) {
                    selectedCart = 3;
                    dateCart = this.props.cart3;
                    Button2 = <Button onClick={() => this.changeSelectedDate(day2, date1, 2)}>{day2}</Button>;
                    Button3 = <Button style={styles.selectedButton}
                                      onClick={() => this.changeSelectedDate(day3, date2, 3)}>{day3}</Button>;
                }
                dateSelector =
                    <Grid>
                        <Panel>
                            <Row>
                                <Col md={6}>
                                    <h3>Select your delivery date:</h3>
                                    <ButtonToolbar>
                                        {Button2}
                                        {Button3}
                                    </ButtonToolbar>
                                </Col>
                            </Row>
                        </Panel>
                    </Grid>
                ;
            }
        }


        var warningLabel;
        var needInfoMessage;
        var userAuth = true;

        if(this.props.userInfo != undefined) {
            if (this.props.authenticated == false) {
                userAuth = false;
                warningLabel = <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error: </span>
                    {" "}Please Login to Order
                </div>;
        }else if (this.props.userInfo.isRestaurant == "true" && !this.props.userInfo.isAccountFinished) {
                var needInfoMessage =
                    <div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span>
                        {" "}Additional information is needed before you can order. Go to the Account tab to fill it out.
                    </div>;
            } else if(this.props.userInfo.isRestaurant == "false" && !this.props.userInfo.isAccountFinished) {
                var needInfoMessage =
                    <div className="alert alert-danger" role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span className="sr-only">Error:</span>
                        Please finish filling out your account info before you can sell. Go to the Account tab to fill
                        it out.
                    </div>;
            }
        }
        return (
            <div style={styles.base} className="container" >
                {warningLabel}
                <h4 style={{color: '#ff0000'}}>{errorMessage}</h4>
                {needInfoMessage}
                {dateSelector}
                <Table responsive>
                    <thead>
                    <tr style={styles.label}>
                        <th></th>
                        <th>Item</th>
                        <th>Seller</th>
                        <th>Price ($)</th>
                        <th>Metric</th>
                        <th>Quantity</th>
                        <th>Quality</th>
                    </tr>
                    </thead>
                    <MarketList items={ items_selectedDate }
                                images={this.props.items}
                                userInfo={this.props.userInfo}
                                userAuthenticated={userAuth}
                                getImage={() => this.props.actions.requestImage(key)}
                                onItemSelect={selectedItem => this.props.actions.openModal({selectedItem}) }/>
                </Table>
                <ItemModal show={this.props.modalIsOpen}
                           selectedItem={this.props.selectedItem}
                           onHide={ () => this.props.actions.closeModal() }
                           cart={dateCart}
                           selectedCart={selectedCart}
                           addToCart={ cartAdd => this.orderItem({cartAdd}, this.props.selectedCart) }
                           userInfo={this.props.userInfo}/>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        items: state.items.items,
        itemImages: state.items.itemImages,
        modalIsOpen: state.modal.modalIsOpen,
        selectedItem: state.modal.selectedItem,
        cart: state.cart.cart,
        cart2: state.cart.cart2,
        cart3: state.cart.cart3,
        userInfo: state.AuthReducer.userInfo,
        authenticated: state.AuthReducer.authenticated,
        selectedCart: state.items.selectedCart,
        selectedDate: state.items.selectedDate,
        selectedDateMoment: state.items.selectedDateMoment
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

MarketView = Radium(MarketView);
export default connect(mapStateToProps, mapDispatchToProps)(MarketView);