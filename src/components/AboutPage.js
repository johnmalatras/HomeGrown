/**
 * Created by alextulenko on 11/29/16.
 */
import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
//import 'css!../style/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker.css';//../style/react-datepicker.css";

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //startDate: moment().add(1, "days")
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    includeDates={[moment().add(1, "days"), moment().add(2, "days"), moment().add(3, "days"), moment().add(4, "days"), moment().add(5, "days"), moment().add(6, "days")]}
                    placeholderText="This only includes today and tomorrow" />
            </div>
        );
    }
}


export default AboutPage;