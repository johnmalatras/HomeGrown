import React from 'react';
import Radium from 'radium'
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';
import '../style/geosuggesthome.css';
import Geosuggest from 'react-geosuggest';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import 'whatwg-fetch'

var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup;
var Button = ReactBootstrap.Button;

class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {cords: null}
        this.TermsOfUse= this.TermsOfUse.bind(this);
        this.onSuggestSelect = this.onSuggestSelect.bind(this);
        this.findItems = this.findItems.bind(this);
    };

    TermsOfUse(){
        browserHistory.push('/terms');
    };

    onSuggestSelect(suggest) {
        this.setState({
            cords: [suggest.location.lat, suggest.location.lng]
        });
    }
    findItems()
    {
        if(this.state.cords)
        {
            this.props.actions.getItemsInArea(this.state.cords,45);
            browserHistory.push('/');
        }

    }
    render() {
        var styles = {
          all: {
            fontFamily: 'Fira Sans',
          },

          image: {
            width:'100vw',
            height: '92.6vh',
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/background.png?alt=media&token=03d9c338-0bd2-4498-bc15-10d88aa8e129')",
            backgroundSize: 'cover',
            color: 'white',
            textAlign: 'center'
          },

          content: {
            width:'100vw',
            height: '120vh'
          },

          headingText: {
            fontSize: '600%',
            fontWeight:'bold'
          },

          subText: {
            fontSize: '185%'
          },

          center: {
            margin: 'auto',
            width: '35%',
            color:'black',
          },

          searchBar: {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#8DC63F',
              border:'#8DC63F',
            color: 'black',
              height: '120vh'
          },

          button: {
            backgroundColor: '#8DC63F',
            padding: '7px 32px',
            display: 'inline-block',
            borderStyle: 'solid',
            fontSize: '130%',
            borderRadius: '2px',
            borderColor: '#7db135',
            transitionDuration: '0.2s',
              color:'white',

            ':hover': {
              backgroundColor: '#618929',
              borderColor: '#45621d'
            },

            ':active': {
              padding: '3px 6px 3px 8px'
            }
          },

          infoSection: {
            width:'100vw',
            height: '60vh'
          },

          sectionOne: {
            padding: '3.5% 1% 1% 58%',
            position: 'absolute'
          },

          sectionTwo: {
            padding: '1.5% 58% 1.5% 10%',
            position: 'absolute'
          },

          sectionOneText: {
            width: '50%',
            height: '100%',
            textAlign: 'right',
            position: 'absolute',
            paddingTop: '70px',
            marginLeft: '40px',
            paddingLeft: '10px'
          },

          sectionTwoText: {
            width: '50%',
            height: '100%',
            textAlign: 'left',
            float: 'right',
            paddingTop: '70px',
            marginRight: '40px'
          },

          headerText: {
            fontSize: '375%'
          },

          infoText: {
            fontSize: '150%'
          }

        };

        return (
            <div style={styles.all}>
                <div style={styles.image}>
                    <br />
                    <br />
                    <br />
                    <p style={styles.headingText}>Your Private Farmer</p>
                    <p style={styles.subText}><em>Browse the best local produce to fill your menu</em></p>
                    <br />
                    <div className="container" style={styles.center}>
                        <Geosuggest style={styles.searchBar}
                                    onSuggestSelect={this.onSuggestSelect}
                                    placeholder="Enter you delivery address"/>
                        <br />
                        <button href="#" onClick={() => this.findItems()} style={styles.button}>Find Produce</button>
                    </div>
                </div>
                <div style={styles.content}>
                    <div style={styles.infoSection}>
                        <div style={styles.sectionOneText}>
                            <p style={styles.headerText}>Skip the Farmers Market</p>
                            <p style={styles.infoText}>RipeNow crowd sources fresh produce from local farms, bringing the community to your menu and putting you at the forefront of the farm-to-table movement, a proven draw for consumers. With produce picked straight from the ground minutes after you order, you know you're getting the freshest, highest quality produce available for a fraction of the price you usually pay.</p>
                        </div>
                        <div style={styles.sectionOne} >
                            <img width="80%" height="80%" src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/apples.jpg?alt=media&token=cb378320-7f2b-4aef-9edd-05d22ae7ee2b" alt="Farmers Market"/>
                        </div>
                    </div>
                    <hr width="88%" color="black" />
                    <div style={styles.infoSection}>
                        <div style={styles.sectionTwo} >
                            <img width="95%" height="95%" src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/kitchen.jpg?alt=media&token=ee0be104-9f21-4e83-9569-6e22af4e1710" alt="Kitchen"/>
                        </div>
                        <div style={styles.sectionTwoText}>
                            <p style={styles.headerText}>Your Food's On the Menu</p>
                            <p style={styles.infoText}>Farms are at the center of our mission to make America's cities self-sufficient. To accomplish this, we've created a simplistic platform that allows you to list your produce and reach a broader customer base, all while cutting out the traditional distributor and maximizing your profit.</p>
                        </div>
                    </div>
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
Home = Radium(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
