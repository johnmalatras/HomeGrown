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
            fontFamily: 'Fira Sans'
          },

          image: {
            width:'100vw',
            height: '90.5vh',
            backgroundImage: "url('../../background.png')",
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
          },

          footer: {
            width: '100vw',
            height: '7vh',
            backgroundColor: '#222433',
            color: 'white',
            fontSize: '100%'
          },

          footerText: {
            padding: '0px 0px 0px 10px',
            position: 'absolute'
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
                            <img width="80%" height="80%" src="../../apples.jpg" alt="Farmers Market"/>
                        </div>
                    </div>
                    <hr width="88%" color="black" />
                    <div style={styles.infoSection}>
                        <div style={styles.sectionTwo} >
                            <img width="95%" height="95%" src="../../kitchen.jpg" alt="Kitchen"/>
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
                <div style={styles.footer}>
                    Terms of Service
                </div>
            </div>
        );
    }
}
Home = Radium(Home);
export default Home;