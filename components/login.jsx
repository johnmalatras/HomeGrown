var React = require("react");
var ReactDOM = require("react-dom");



var LoginPage = React.createClass({
    render: function () {
        return(
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }
});
ReactDOM.render(<LoginPage/>,
    document.getElementById('container'));