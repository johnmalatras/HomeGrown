/**
 * Created by alextulenko on 11/29/16.
 */
import React from 'react';
import Radium, { Style } from 'radium'
var ReactBootstrap = require('react-bootstrap');
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Image = ReactBootstrap.Image;
var Col = ReactBootstrap.Col;
var Table = ReactBootstrap.Table;
var imgStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
};
var styles = {
    base: {
        backgroundSize: 'cover',
    }
};
class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var styles = {
            all: {
                fontFamily: 'Fira Sans',
            },
            headings: {
                fontSize: '200%',
                fontWeight:'bold',
                textAlign: 'center',
                padding: '3.5% 1% 1% 1%'
            },
            content: {
                fontSize: '125%',
                textAlign: 'center',
                padding: '1% 15% 1% 15%'
            },
            qualityTable: {
                padding: '1% 5% 1% 5%'
            },
            image: {
                width:'100vw',
                height: '40vh',
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/Map.PNG?alt=media&token=57a18ff2-d17a-4424-aae6-9cc01aa07340')",
                backgroundSize: 'cover',
                color: 'white'
            },
            trailImage: {
                width:'25vw',
                height: '30vh',
                padding: '1% 70% 1% 30%',
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/AboutUsTrail%20Small.png?alt=media&token=a1d3527b-f796-464e-a518-5cf1d7dc614f')",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            },
            trailImageTwo: {
                width:'25vw',
                height: '30vh',
                padding: '1% 70% 1% 30%',
                backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/AboutUsTrail%20Small%20Flipped.png?alt=media&token=fb537f7f-253a-4b94-a661-fc11775984f3')",
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            },
            fruits: {
                padding: '1% 1% 1% 22%',
                position: 'relative'
            },
            truck: {
                padding: '1% 1% 1% 65%',
                position: 'relative'
            },
            food: {
                padding: '1% 1% 1% 18%',
                position: 'relative'
            },
            sectionOne: {
                fontSize: '125%',
                textAlign: 'center',
                padding: '1% 50% 0% 10%'
            },
            sectionOneHeader: {
                fontSize: '200%',
                fontWeight:'bold',
                textAlign: 'center',
                padding: '1% 50% 1% 10%'
            },
            sectionTwo: {
                fontSize: '125%',
                textAlign: 'center',
                padding: '1% 10% 1% 50%'
            },
            sectionTwoHeader: {
                fontSize: '200%',
                fontWeight:'bold',
                textAlign: 'center',
                padding: '1% 10% 1% 50%'
            }
        };
        return (
            <div  style={styles.all}>
                <div>
                    <p style = {styles.headings}>A New Era For Produce</p>
                    <p style = {styles.content}> On a daily basis, we’re delivering fresh, delicious local produce from farms in your community, and bringing that food to your menu.
                        At RipeNow, we want to ensure everyone has access to the same quality of fresh produce. Join our community – as a farm, a transporter, or a restaurant! We’d be happy to welcome you.</p>
                    <div style={styles.image}> </div>
                </div>
                <br />
                <div style={styles.fruits}>
                    <img width="20%" height="20%"  src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/Fruits.png?alt=media&token=90b92272-28b4-423f-b547-07bc874309d3" alt="Fruits"/>
                </div>
                <p style = {styles.sectionOneHeader}>Farms Grow Fresh Produce</p>
                <p style = {styles.sectionOne}>Everywhere in your local community, farmers are working hard to grow, fresh, delicious produce. RipeNow gives them a platform to sell their food directly to restaurants
                    , saving themselves time and money in the process. We're not only passionate about bringing you delicious food, but supporting local farmers as well. </p>
                <img style = {styles.trailImage} />
                <div style={styles.truck}>
                    <img width="40%" height="40%"  src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/truck-1042600_640.png?alt=media&token=c501edc8-f015-423e-ad5b-a359051093b5" alt="Truck"/>
                </div>
                <p style = {styles.sectionTwoHeader}>RipeNow Handles the Delivery</p>
                <p style = {styles.sectionTwo}>Our RipeNow certified drivers pick up and drop off the produce, to ensure consistent and fresh deliveries. Not only are we timely and consistent,
                    but we deliver your produce with the care it deserves. Just let us know the produce you want, when you want it, and we'll handle the rest.</p>
                <img style = {styles.trailImageTwo}/>
                <div style={styles.food}>
                    <img width="30%" height="30%"  src="https://firebasestorage.googleapis.com/v0/b/homegrown-65645.appspot.com/o/Finished%20Food.png?alt=media&token=e7a7d396-f4a9-4123-9a0d-a0e19783d126" alt="Food"/>
                </div>
                <p style = {styles.sectionOneHeader}>Your Community Appears on Your Menu</p>
                <p style = {styles.sectionOne}>Inspire customers with fresh, local ingredients, and proudly display your food like you’ve never before been able to.
                    With RipeNow, the difficulties of buying local are a problem of the past – use our website to schedule orders and deliveries,
                    and always have the produce you need, directly from local farmers.</p>
                <br />
                <p style = {styles.headings}>RipeNow's Custom Quality Scale</p>
                <div style={styles.qualityTable}>
                    <Table responsive>
                        <thead>
                        <tr>
                            <th> </th>
                            <th style={{fontWeight: 'bold'}}>Extra Quality</th>
                            <th style={{fontWeight: 'bold'}}>Quality</th>
                            <th style={{fontWeight: 'bold'}}>Bulk</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>Size</td>
                            <td>Size must be consistent across all items in the units</td>
                            <td>Size must be very similar across the entire order, deviating from an average by a small amount. However, they are not expected to be exactly consistent</td>
                            <td>Size can vary across the order</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>Appearance</td>
                            <td>They should be identical across the delivery</td>
                            <td>They should fall within the same range, but appearance isn’t exact across the order. That being said, they should be within a small range</td>
                            <td>The appearance can change drastically throughout the order</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>Defects</td>
                            <td>No defects on any of the items</td>
                            <td>10% of the order can have small blemishes or defects but no major ones</td>
                            <td>Small defects and blemishes are allowable, as long as they don’t affect the freshness or ripeness of the produce. Large blemishes are allowable for 10% of the order, but can’t change freshness or ripeness</td>
                        </tr>
                        <tr>
                            <td style={{fontWeight: 'bold'}}>Allowable Tolerances</td>
                            <td>None</td>
                            <td>As said in each of the categories, there is a small tolerance in the variability of these orders, but the orders will still be held to high standards in the amount of variability, and the average produce in the order</td>
                            <td>There is a large amount of deviation available in all these categories, but it is not acceptable to place old or bad quality produce in the Bulk section – this produce must still be fresh</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}
AboutPage = Radium(AboutPage);
export default AboutPage;