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
            height: '92.3vh',
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
            backgroundColor: '#222433'
          },

          footerDiv: {
            paddingTop: "11px",
            display: "flex",
            fontSize: '110%'
          },

          footerTextFirst: {
            paddingTop: '5px'
          },

          footerText: {
            textIndent: '1.5em',
            paddingTop: '5px',
            color: 'white'
          },

          footerImage: {
            paddingBottom: '6px'
          },

          footerLinkText: {
            color: 'white'
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
                <footer className="footer" style={styles.footer}>
                  <div className="container">
                    <div style={styles.footerDiv}>
                      <div style={styles.footerImage}>
                        <img width="50%" height="50%" src="../../RipeNow_Icon_Small.png" alt="RipeNow"/>
                      </div>
                      <div style={styles.footerTextFirst}>
                        <p><a href="#" style={styles.footerLinkText}>Terms of Service</a></p>
                      </div>
                      <div style={styles.footerText}>
                        <p><a href="#" style={styles.footerLinkText}>Privacy</a></p>
                      </div>
                      <div style={styles.footerText}>
                        <p><a href="#" style={styles.footerLinkText}>Blog</a></p>
                      </div>
                      <div style={styles.footerText}>
                        <p>© 2017 RipeNow</p>
                      </div>
                    </div>
                  </div>
                </footer>
            </div>
        );
    }
}
Home = Radium(Home);
export default Home;