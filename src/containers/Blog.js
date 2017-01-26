import React from 'react';
import Radium from 'radium'
var ReactBootstrap = require('react-bootstrap');
import { browserHistory } from 'react-router';

var FormControl = ReactBootstrap.FormControl;
var FormGroup = ReactBootstrap.FormGroup;
var Button = ReactBootstrap.Button;

class Blog extends React.Component {
    constructor(props) {
        super();
    };

    render() {
        var styles = {
          all: {
            fontFamily: 'Fira Sans',
            width: '100vw'
          },

          header: {
            fontSize: '400%',
            paddingTop: '3px',
            paddingBottom: '0px',
            marginBottom: '0px'
          },

          content: {
            textAlign: 'center',
            width: '70%',
            margin: '0 auto'
          },

          subtitle: {
            fontSize: '100%',
            paddingTop: '0px',
            marginTop: '0px'
          },

          post: {
            fontSize: '150%'
          },

          signoff: {
            textAlign: 'left'
          }

        };

        return (
            <div className="container" style={styles.all}>
              <div style={styles.content} >
                <p style={styles.header}>Hello, World.</p>
                <br />
                <div style={styles.post}>
                  I love food. If you’re reading this, you probably do too. And I’m glad to have you on our side, because we have a war to fight. If you haven’t noticed, money has ambushed food and held her hostage for the last 60 years. It’s our job to set her free. 
                  <br />
                  <br />
                  The way that people eat largely stayed the same for several thousand years; you walked down the street to the market and bought or bartered for fresh ingredients harvested from farms a stones throw away. That all changed in the American 1950’s when mass produced food like TV dinners and SPAM became prevalent. We’ve made a little progress back to our roots since the 50’s, but consumers and restaurateurs alike still cook the majority of their food with mass produced, accelerated growth, unnatural produce. 
                  <br />
                  <br />
                  It’s now 2017, and mother nature has a new weapon in the war for healthy food: RipeNow. We’re going to allow the average American the ability to eat like our ancestors did, not just those who can afford the current farm-to-table restaurants. To do this we’re going to give every restaurant in America the opportunity to have a complete menu sourced from farms within their state lines, for cheaper than the mass produced junk they’re getting now. Small farms and the people that run them are the bed rock of this country. It’s about time we take advantage of the resources they’re providing to support them and create healthy, self-sustaining cities. By giving restaurants access to this crowd sourced network of farms, RipeNow truly is Your Private Farmer.
                  <br />
                  <br />
                  <p style={styles.signoff}>
                    Stay tuned, America.
                    <br />
                    <br />
                    - The RipeNow Team
                  </p>
                  <hr />
                </div>
              </div>
            </div>
        );
    }
}
Blog = Radium(Blog);
export default Blog;