import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import MenuItem from "./Menu"
import { Button, Icon, Menu, Card, Row, Col } from 'antd';
import "./ProfilePage.css"
import logo from "../Images/logo.png";
import pic from "../Images/NatureMattersCover.jpg"
const { SubMenu } = Menu;
const { Meta } = Card;
class WorkCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card
                hoverable
                style={{ 'maxWidth': '100%', 'height': '100%' }}
                cover={<img alt="example" id="grid-img" src= {pic}/>}>
                <Meta title={this.props.name} description={this.props.children}/>
            </Card>
        );
    }
}

export default WorkCard;
