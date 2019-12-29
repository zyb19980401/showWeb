import React, { Component } from "react";
import { Menu, Icon } from "antd";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import "./Navigation.css";
const { SubMenu } = Menu;

class Navigation extends Component {
    state = {
        current: "mail"
    };

    handleClick = e => {
        console.log("click ", e);
        this.setState({
            current: e.key
        });
    };
    render() {
        return (
            <div className="navigator">
                <Link to={"/"}>
                    <img id="Casey-logo" src={logo} alt={"logo image"} />
                </Link>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{ float: "right" }}
                >
                    <Menu.Item key="a">
                        <Link to={"/"}>
                            <Icon type="inbox" />
                            Profile
                            </Link>
                    </Menu.Item>
                    <Menu.Item key="b" style={{ fontSize: "1em" }}>
                        <Link to={"/Profile"}>
                            <Icon type="user" />
                            About
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="c">
                        <Link to={"/Profile"}>
                            <Icon type="file" />
                            Resume
                            </Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <Icon type="phone" />
                                Contact
                            </span>
                        }
                    >
                        <Menu.ItemGroup title="social media">
                            <Menu.Item key="instagram">
                                <Icon type="instagram" />
                                instagram
                            </Menu.Item>
                            <Menu.Item key="facebook">
                                <Icon type="facebook" />
                                facebook
                            </Menu.Item>
                            <Menu.Item key="linkedin">
                                <Icon type="linkedin" />
                                linkedin
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="contact">
                            <Menu.Item key="email">
                                <Icon type="mail" />
                                email
                            </Menu.Item>
                            <Menu.Item key="text">
                                <Icon type="mobile" />
                                text
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}
export default Navigation;
