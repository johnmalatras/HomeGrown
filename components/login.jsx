var React = require("react");
var ReactDOM = require("react-dom");
var LoginForm = require("./LoginForm");



var LoginPage = React.createClass({
    render: function () {
        return(
            <div class="row">
                <div class="col-sm-6">
                    <LoginForm/>
                </div>
                <div class="col-sm-6">
                    <LoginForm/>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<LoginPage/>,
    document.getElementById('container'));