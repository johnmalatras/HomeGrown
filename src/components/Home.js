import React from 'react';
import Radium from 'radium'
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';

var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup;
var Button = ReactBootstrap.Button;

class Home extends React.Component {
    constructor(props) {
        super();
        this.TermsOfUse= this.TermsOfUse.bind(this);
    };

    TermsOfUse(){
        browserHistory.push('/terms');
    };

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
            width: '35%'
          },

          searchBar: {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#8DC63F'
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
            padding: '3.5% 1% 1% 54%',
            position: 'absolute'
          },

          sectionTwo: {
            padding: '1.5% 54% 1.5% 10%',
            position: 'absolute'
          },

          sectionOneText: {
            width: '50%',
            height: '100%',
            textAlign: 'right',
            position: 'absolute'
          },

          sectionTwoText: {
            width: '50%',
            height: '100%',
            textAlign: 'left',
            float: 'right'
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
                      <input className="form-control input-lg" id="ex3" type="text" placeholder="Enter your delivery address" style={styles.searchBar} />
                      <br />
                      <button href="#" style={styles.button}>Find Produce</button>
                    </div>
                </div>
                <div style={styles.content}>
                    <div style={styles.infoSection}>
                        <div style={styles.sectionOneText}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p style={styles.headerText}>Farm To Table</p>
                            <p style={styles.infoText}>RipeNow crowd sources fresh produce from local farms, bringing the community to your menu.</p>
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
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p style={styles.headerText}>Connect With Restaurants</p>
                            <p style={styles.infoText}>Join RipeNow to become a part of our revolutionary distribution system and put your food back on the plate of your community.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Home = Radium(Home);
export default Home;