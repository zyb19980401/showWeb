import { Carousel } from 'antd';
import React, { Component } from "react";
import NatureMattersCover from "../Images/NatureMatters/NatureMattersCover.jpg"
import NatureMatters1 from "../Images/NatureMatters/NatureMatters1.jpg"
import NatureMatters2 from "../Images/NatureMatters/NatureMatters2.jpg"
import NatureMatters3 from "../Images/NatureMatters/NatureMatters3.jpg"

function SliderCreated(props) {
    const { dotPosition } = 'bottom';
    console.log(props)
    console.log(props.props.src)
    const Images = props.props.src.map((post) =>
        <div key={post}>
            <img alt="example" id="grid-img" style={{ "width": "100%", "height": "100%" }} src={post} />
        </div>
    );
    return (
        <Carousel dotPosition={'bottom'}>
            {Images}
        </Carousel>
    );
}

class Slider extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    state = {
        dotPosition: 'bottom',
    };
    render() {
        const { dotPosition } = this.state;
        return (
            <SliderCreated props={this.props} />
        );
    }
}

export default Slider;
