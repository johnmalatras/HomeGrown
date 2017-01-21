import React from 'react';
import Radium from 'radium'
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';

class Footer extends React.Component {
    constructor(props) {
        super();
        this.handleTerms = this.handleTerms.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleBlog = this.handleBlog.bind(this);
    };

    handleTerms(){
        browserHistory.push('/terms');
    };

    handlePrivacy(){
        browserHistory.push('/privacy');
    };

    handleBlog(){
        browserHistory.push('/blog');
    };

    render() {
        var styles = {
          all: {
            fontFamily: 'Fira Sans'
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
                <footer className="footer" style={styles.footer}>
                  <div className="container">
                    <div style={styles.footerDiv}>
                      <div style={styles.footerImage}>
                        <img width="50%" height="50%" src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/RipeNow_Icon_Small.png?alt=media&token=08415221-4f86-4325-b92f-90a050054aab" alt="RipeNow"/>
                      </div>
                      <div style={styles.footerTextFirst}>
                        <p><a href="#" onClick={() => this.handleTerms()} style={styles.footerLinkText}>Terms of Service</a></p>
                      </div>
                      <div style={styles.footerText}>
                        <p><a href="#" onClick={() => this.handlePrivacy()} style={styles.footerLinkText}>Privacy</a></p>
                      </div>
                      <div style={styles.footerText}>
                        <p><a href="#" onClick={() => this.handleBlog()} style={styles.footerLinkText}>Blog</a></p>
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
Footer = Radium(Footer);
export default Footer;