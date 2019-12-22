import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import MenuItem from "./Menu"
import WorkCard from "./ProfileCard"
import { Button, Icon, Menu, Card, Row, Col,Tag } from 'antd';
import "./ProfilePage.css"
const { SubMenu } = Menu;
const { Meta } = Card;


const NatureMattersCover = '../images/NatureMattersCover'

class ProfilePage extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div id='menu_Button_Grid'>
                    <div id="menu_Bar">
                        <MenuItem></MenuItem>
                    </div>
                </div>
                <div id="show_Grid">
                    <div className="grid-container">
                        <div className="grid-item item1">1</div>
                        <div className="grid-item item2">2</div>
                        <div className="grid-item item3">3</div>
                        <div className="grid-item item4">4</div>
                        <div className="grid-item item5">5</div>
                        <div className="grid-item item6">6</div>
                        <div className="grid-item item7">7</div>
                        <div className="grid-item item8">8</div>
                        <div className="grid-item item9">
                        <WorkCard name= "Nature Matters" src = {NatureMattersCover} >
                            <Tag color="geekblue">good</Tag>
                            <Tag color="purple">love zyb</Tag>
                        </WorkCard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
