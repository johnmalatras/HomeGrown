import React from 'react';
import Radium from 'radium'
var ReactBootstrap = require('react-bootstrap');
import { browserHistory,hashHistory } from 'react-router';

class Footer extends React.Component {
    constructor(props) {
        super();
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleBlog = this.handleBlog.bind(this);
    };

    handlePrivacy(){
        hashHistory.push('/privacy');
    };

    handleBlog(){
        hashHistory.push('/blog');
    };

    render() {
        var styles = {

          footer: {
            backgroundColor: '#222433',
            fontFamily: 'Fira Sans',
            height: '57px'
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
            paddingBottom: '11px',
              height: '46px',
              paddingRight:'12px'
          },

          footerLinkText: {
            color: 'white'
          }

        };

        return (
              <footer className="footer" style={styles.footer}>
                <div className="container">
                  <div style={styles.footerDiv}>
                    <div style={styles.footerImage}>
                      <img style={styles.footerImage} src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/RipeNow_Icon_Small.png?alt=media&token=08415221-4f86-4325-b92f-90a050054aab" alt="RipeNow"/>
                    </div>
                    <div style={styles.footerTextFirst}>
                      <p><a href="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/RipeNow%20Terms%20and%20Conditions.pdf?alt=media&token=9e9ef505-7cbd-48a2-9b68-06b62a013e1b" target="_blank" style={styles.footerLinkText}>Terms of Service</a></p>
                    </div>
                    <div style={styles.footerText}>
                      <p><a onClick={() => this.handlePrivacy()} style={styles.footerLinkText}>Privacy</a></p>
                    </div>
                    <div style={styles.footerText}>
                      <p><a  onClick={() => this.handleBlog()} style={styles.footerLinkText}>Blog</a></p>
                    </div>
                    <div style={styles.footerText}>
                      <p>© 2017 RipeNow</p>
                    </div>
                  </div>
                </div>
              </footer>
        );
    }
}
Footer = Radium(Footer);
export default Footer;