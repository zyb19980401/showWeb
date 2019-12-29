import React, { Component } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import person_pic from "./Images/person.png"
import { Button, Radio, Icon } from 'antd';
import Mainview from "./RootViews/Mainview"



class App extends Component {
    render() {
        return (
            <div>
                <Mainview></Mainview>
            </div>
        );
    }
}

export default App;
