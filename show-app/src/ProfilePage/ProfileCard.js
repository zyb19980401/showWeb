import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import MenuItem from "./Menu"
import { Button, Icon, Menu, Card, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import "./ProfilePage.css"
import logo from "../Images/logo.png";
import pic from "../Images/NatureMatters/NatureMattersCover.jpg"
import Slider from "./SliderPage"
const { SubMenu } = Menu;
const { Meta } = Card;
class WorkCard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <Card
                hoverable
                style={{ 'maxWidth': '100%', 'height': '100%' }}
                cover={<Slider src={this.props.src}></Slider>}>
                <Meta title={this.props.name} description={this.props.children}/>
                <br></br>
                <Link to={this.props.link}>
                <Button style={{ "width": "80%", "height": "100%", "backgroundColor":"white" }}> Check Out Now!</Button>
                </Link>
            </Card>
        );
    }
}

export default WorkCard;
