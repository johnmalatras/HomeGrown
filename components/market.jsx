import React from 'react';
import ReactDOM from 'react-dom';
var ReactBootstrap = require('react-bootstrap');

class Market extends React.Component {
    render() {
    	var ButtonToolbar = ReactBootstrap.ButtonToolbar;
    	var Button = ReactBootstrap.Button;
    	const buttonsInstance = (
		  <ButtonToolbar>
		    {/* Standard button */}
		    <Button>Default</Button>

		    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
		    <Button bsStyle="primary">Primary</Button>

		    </hr>
		    
		    {/* Indicates a successful or positive action */}
		    <Button bsStyle="success">Success</Button>

		    {/* Contextual button for informational alert messages */}
		    <Button bsStyle="info">Info</Button>

		    {/* Indicates caution should be taken with this action */}
		    <Button bsStyle="warning">Warning</Button>

		    {/* Indicates a dangerous or potentially negative action */}
		    <Button bsStyle="danger">Danger</Button>

		    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
		    <Button bsStyle="link">Link</Button>
		  </ButtonToolbar>
		);
        return buttonsInstance;
    }
}

ReactDOM.render(<Market/>, document.getElementById('market'));