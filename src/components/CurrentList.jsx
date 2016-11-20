import React from 'react';
import CurrentItem from './CurrentItem.jsx';
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;

const CurrentList = (props) => {
    const listItems = props.items.map((row) => {
        return <CurrentItem key={row.title}
                           item={row}
                           onItemSelect={ props.onItemSelect } />
    });

    return (
        <tbody className="theList">
        {listItems}
        </tbody>
    );
};

export default CurrentList;