import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./FrontPage.css";
import Navigation from "../Navigation/Navigation";
import person_pic from "../Images/person.png";
import { Button, Radio, Icon } from "antd";

class FrontPage extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <div id="Home_content">
                    <div id="Home_content_left">
                        <div id="Home_content_hi">
                            <strong id="Hi_text"> Hi, I'm Casey</strong>
                        </div>
                        <div id="Home_content_description">
                            <h1 id="Description_text">
                                Fasshion Desiner and creative painter{" "}
                            </h1>
                            <h1 id="Description_text">
                                third year at Parsons{" "}
                            </h1>
                            <h1 id="Description_text">
                                {" "}
                                Fashion is a living language, constantly
                                changing with time and emotions.{" "}
                            </h1>
                        </div>
                        <Link to={"/Profile"}>
                            <Button type="primary" icon="fire" size={"large"}>
                                Check My Work
                            </Button>
                        </Link> 
                    </div>
                    <div id="Home_content_right">
                        <img
                            id="Personal_picture"
                            src={person_pic}
                            alt={"person image"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default FrontPage;
