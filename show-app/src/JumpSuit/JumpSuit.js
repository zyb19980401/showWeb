import React from 'react'
import { Spring } from "react-spring/renderprops"
import Navigation from "../Navigation/Navigation"
import "./JumpSuit.css";
import ShowBox1 from "./ShowBox1"
import ShowBox2 from "./ShowBox2"
import FormalityCover from "../Images/Formality/FormalityCover.jpg"
import Formality1 from "../Images/Formality/Formality1.jpg"
import Formality2 from "../Images/Formality/Formality2.jpg"
import Formality3 from "../Images/Formality/Formality3.jpg"
import Formality4 from "../Images/Formality/Formality4.jpg"

export default function JumpSuit() {
    return (
        <div>
            <Navigation></Navigation>
            <ShowBox1/>
            <ShowBox2/>
                {/* <div className="ShowBox1">
                    ShowBox1
            </div> */}
                {/* <div className="ShowBox2">
                    ShowBox2
            </div> */}
        </div>
    )
}
