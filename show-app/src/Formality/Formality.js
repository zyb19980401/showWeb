import React from 'react'
import { Spring } from "react-spring/renderprops"
import Navigation from "../Navigation/Navigation"
import "./Formality.css";
import ShowBox1 from "./ShowBox1"
import ShowBox2 from "./ShowBox2"

export default function Formality() {
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
