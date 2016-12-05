/**
 * Created by alextulenko on 11/29/16.
 */
import React from 'react';
var ReactBootstrap = require('react-bootstrap');

var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;

class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={12}><h2>RipeNow</h2></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><h3>Bringing farms and resturants together - a community movement</h3></Col>
                    </Row>
                    <Row >
                        <Col xs={12}><p>An innovative way to unite restaurants and farms for a common cause – providing local, fresh, and healthy produce to their community. By providing the restaurant’s a streamlined way to order, and delivering directly from the farms, we maximize freshness, save both organizations time and money, and connect the maximum amount of farms to restaurants.  We worry about the details, so you can focus on getting the ingredients you need, when you need them – at the best quality and price.</p></Col>
                    </Row>

                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>Not just a service – a movement.</p></Col>
                        <Col md={6}><p>At RipeNow, we not only provide you with the best produce possible, but do it in a way that connects the farms and restaurants with the community. We care about supporting local farm’s and restaurant’s, and want to make it easier for them to connect. Our primary goal is getting users excited about local grown, fresh ingredients that support the farmers close to them.</p></Col>
                    </Row>

                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>The produce you need, when you need it.</p></Col>
                        <Col md={6}><p>With our easy and intuitive online ordering system, we make it easy for you to get exactly what you want.
                            With quality and farm ratings, you know exactly what you’re going to get.
                            We handle delivery, so you just have to tell us when you want it, and we’ll handle the rest.</p></Col>
                    </Row>

                    <Row>
                        <Col md={6}><p style={{fontWeight: 'bold'}}>Built to save you time and money.</p></Col>
                        <Col md={6}><p>Here, we know we’re dealing with two of the busiest professions in the world – farms and restaurants.
                            Our goal is to streamline the process, to save you time when ordering, and save you money by cutting out
                            unnecessary series of wholesale distributors. </p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><h3>Support and Contact Information</h3></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><p>Please contact us with any and all issues, comments, or suggestions! Here is my personal email and phone number:</p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><p>Phone Number: 919-830-9521</p></Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}><p>Email: ajtulenko@ripenow.co</p></Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


export default AboutPage;