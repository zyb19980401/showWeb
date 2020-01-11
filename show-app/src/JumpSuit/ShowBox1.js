import React from 'react'
import { Spring } from "react-spring/renderprops"
import "./JumpSuit.css";
import FormalityCover from "../Images/Formality/FormalityCover.jpg"
import Formality1 from "../Images/Formality/Formality1.jpg"
import Formality2 from "../Images/Formality/Formality2.jpg"
export default function ShowBox1() {
    return (
        <Spring
            from={{ opacity: 0, marginTop: -1000 }}
            to={{ opacity: 1, marginTop: 0 }}
        >
            {props => (
                <div style={props}>
                    <div className="ShowBox1">
                        <div className="ShowBox1Image1">
                            <img
                                className="Personal_picture"
                                src={FormalityCover}
                                alt={"person image"}
                            />
                        </div>
                        <div className="ShowBox1Image">
                            <img
                                className="Personal_picture"
                                src={Formality1}
                                alt={"person image"}
                            />
                        </div>
                        <div className="ShowBox1Image">
                            <img
                                className="Personal_picture"
                                src={Formality2}
                                alt={"person image"}
                            />
                        </div>

                    </div>
                </div>
            )}
        </Spring>
    )
}
