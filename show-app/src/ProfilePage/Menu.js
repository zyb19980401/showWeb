import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import { Button, Icon, Menu, Card } from "antd";
import "./ProfilePage.css";
const { SubMenu } = Menu;
const { Meta } = Card;

class MenuItem extends Component {
    state = {
        collapsed: false
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <div>
                <Button
                    type="primary"
                    onClick={this.toggleCollapsed}
                    style={{ marginBottom: "1em" }}
                >
                    <Icon
                        type={
                            this.state.collapsed ? "menu-unfold" : "menu-fold"
                        }
                    />
                </Button>
                <Menu
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1", "ShowClothing", 'Suits', 'FineArts']}
                    mode="inline"
                    theme="light"
                    inlineCollapsed={this.state.collapsed}
                >
                    <SubMenu
                        key="ShowClothing"
                        title={
                            <span>
                                <Icon type="radar-chart" />
                                <span>ShowClothing</span>
                            </span>
                        }
                    >
                        <Menu.Item key="BlazingWeb">
                            <span>
                                <Icon type="radar-chart" />
                                <span>BlazingWeb</span>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="ShowDesign">
                            <span>
                                <Icon type="thunderbolt" />{" "}
                                <span>ShowDesign</span>
                            </span>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="Suits"
                        title={
                            <span>
                                <Icon type="skin" />
                                <span>Suits</span>
                            </span>
                        }
                    >
                        <Menu.Item key="Maobi">                            <span>
                            <Icon type="rocket" />
                            <span>Maobi</span>
                        </span></Menu.Item>
                        <Menu.Item key="JumpSuit">                            <span>
                            <Icon type="skin" />
                            <span>JumpSuit</span>
                        </span></Menu.Item>
                        <Menu.Item key="NatureMatters">                            <span>
                            <Icon type="smile" />
                            <span>NatureMatters</span>
                        </span></Menu.Item>
                        <Menu.Item key="Formality">                            <span>
                            <Icon type="fire" />
                            <span>Formality</span>
                        </span></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="FineArts"
                        title={
                            <span>
                                <Icon type="tags" />
                                <span>FineArts</span>
                            </span>
                        }
                    >
                        <Menu.Item key="FineArts">                            <span>
                            <Icon type="star" />
                            <span>FineArts</span>
                        </span></Menu.Item>
                        <Menu.Item key="ShoeCollection">                            <span>
                            <Icon type="heart" />
                            <span>ShoeCollection</span>
                        </span></Menu.Item>
                    </SubMenu>

                    <Menu.Item key="LonelyPlace">
                        <Icon type="lock" />
                        <span> LonelyPlace</span>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default MenuItem;
