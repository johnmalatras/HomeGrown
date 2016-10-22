import React from 'react';
import ReactDOM from 'react-dom';

class Market extends React.Component {
    render() {
        return <button type="button" class="btn btn-default">Left</button>
    }
}

ReactDOM.render(<Market/>, document.getElementById('market'));