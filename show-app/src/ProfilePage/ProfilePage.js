import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import MenuItem from "./Menu"
import WorkCard from "./ProfileCard"
import { Button, Icon, Menu, Card, Row, Col, Tag, Carousel } from 'antd';
import "./ProfilePage.css"
import Slider from "./SliderPage"

import NatureMattersCover from "../Images/NatureMatters/NatureMattersCover.jpg"
import NatureMatters1 from "../Images/NatureMatters/NatureMatters1.jpg"
import NatureMatters2 from "../Images/NatureMatters/NatureMatters2.jpg"
import NatureMatters3 from "../Images/NatureMatters/NatureMatters3.jpg"

import JumpSuitCover from "../Images/JumpSuit/JumpSuitCover.jpg"
import JumpSuit1 from "../Images/JumpSuit/JumpSuit1.jpg"
import JumpSuit2 from "../Images/JumpSuit/JumpSuit2.jpg"
import JumpSuit3 from "../Images/JumpSuit/JumpSuit3.jpg"

import LonelyPlaceCover from "../Images/LonelyPlace/LonelyPlaceCover.jpg"
import LonelyPlace1 from "../Images/LonelyPlace/LonelyPlace1.png"
import LonelyPlace2 from "../Images/LonelyPlace/LonelyPlace2.png"
import LonelyPlace3 from "../Images/LonelyPlace/LonelyPlace3.png"
import LonelyPlace4 from "../Images/LonelyPlace/LonelyPlace4.png"
import LonelyPlace5 from "../Images/LonelyPlace/LonelyPlace5.png"


import BlazingWebCover from "../Images/BlazingWeb/BlazingWebCover.jpg"
import BlazingWeb1 from "../Images/BlazingWeb/BlazingWeb1.jpg"
import BlazingWeb2 from "../Images/BlazingWeb/BlazingWeb2.jpg"
import BlazingWeb3 from "../Images/BlazingWeb/BlazingWeb3.jpg"


import ShowDesignCover from "../Images/ShowDesign/ShowDesignCover.jpg"
import ShowDesign1 from "../Images/ShowDesign/ShowDesign1.jpg"
import ShowDesign2 from "../Images/ShowDesign/ShowDesign2.jpg"

import ShoesCollectionCover from "../Images/ShoesCollection/ShoesCollectionCover.jpg"
import ShoesCollection1 from "../Images/ShoesCollection/ShoesCollection1.jpg"
import ShoesCollection2 from "../Images/ShoesCollection/ShoesCollection2.jpg"
import ShoesCollection3 from "../Images/ShoesCollection/ShoesCollection3.jpg"
import ShoesCollection4 from "../Images/ShoesCollection/ShoesCollection4.jpg"

import MaoBiCover from "../Images/MaoBi/MaoBiCover.jpg"
import MaoBi1 from "../Images/MaoBi/MaoBi1.jpg"
import MaoBi2 from "../Images/MaoBi/MaoBi2.jpg"
import MaoBi3 from "../Images/MaoBi/MaoBi3.jpg"
import MaoBi4 from "../Images/MaoBi/MaoBi4.jpg"


import FormalityCover from "../Images/Formality/FormalityCover.jpg"
import Formality1 from "../Images/Formality/Formality1.jpg"
import Formality2 from "../Images/Formality/Formality2.jpg"
import Formality3 from "../Images/Formality/Formality3.jpg"
import Formality4 from "../Images/Formality/Formality4.jpg"

import FineArt1 from "../Images/FineArt/FineArtCover.jpg"
import FineArtCover from "../Images/FineArt/FineArt1.jpg"
import FineArt2 from "../Images/FineArt/FineArt2.jpg"
import FineArt3 from "../Images/FineArt/FineArt3.jpg"
import FineArt4 from "../Images/FineArt/FineArt4.jpg"
import FineArt5 from "../Images/FineArt/FineArt5.jpg"


const BlazingWebArray = [BlazingWebCover, BlazingWeb1, BlazingWeb2, BlazingWeb3]

const NatureMattersArray = [NatureMattersCover, NatureMatters1, NatureMatters2, NatureMatters3]

const JumpSuitArray = [JumpSuitCover, JumpSuit1, JumpSuit2, JumpSuit3]

const LonelyPlaceArray = [LonelyPlaceCover, LonelyPlace1, LonelyPlace2, LonelyPlace3, LonelyPlace4, LonelyPlace5]

const ShowDesignArray = [ShowDesignCover, ShowDesign1, ShowDesign2]

const ShoesCollectionArray = [ShoesCollectionCover, ShoesCollection1, ShoesCollection2, ShoesCollection3, ShoesCollection4]

const MaoBiArray = [MaoBiCover, MaoBi1, MaoBi2, MaoBi3, MaoBi4]

const FormalityArray = [FormalityCover, Formality1, Formality2, Formality3, Formality4]

const FineArtArry = [FineArtCover, FineArt1, FineArt2, FineArt3, FineArt4, FineArt5]



const { SubMenu } = Menu;
const { Meta } = Card;



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
                        <div className="grid-item item1">
                            <WorkCard name="Formality" src={FormalityArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard></div>
                        <div className="grid-item item2"><WorkCard name="FineArt" src={FineArtArry} >
                            <Tag color="geekblue">good</Tag>
                            <Tag color="purple">cool</Tag>
                        </WorkCard></div>
                        <div className="grid-item item3">
                            <WorkCard name="MaoBi" src={MaoBiArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard></div>
                        <div className="grid-item item4">
                            <WorkCard name="ShoesCollection" src={ShoesCollectionArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard></div>
                        <div className="grid-item item5">
                            <WorkCard name="ShowDesign" src={ShowDesignArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard>
                        </div>
                        <div className="grid-item item6">
                            <WorkCard name="BlazingWeb" src={BlazingWebArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard>
                        </div>

                        <div className="grid-item item7">
                            <WorkCard name="LonelyPlace" src={LonelyPlaceArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard>
                        </div>


                        <div className="grid-item item8">
                            <WorkCard name="JumpSuit" src={JumpSuitArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard>
                        </div>

                        
                        <div className="grid-item item9">
                            <WorkCard name="Nature Matters" src={NatureMattersArray} >
                                <Tag color="geekblue">good</Tag>
                                <Tag color="purple">cool</Tag>
                            </WorkCard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
