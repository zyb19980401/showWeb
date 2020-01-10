import React from 'react'
import { Spring } from "react-spring/renderprops"
import "./JumpSuit.css";
import Formality3 from "../Images/Formality/Formality3.jpg"
import Formality4 from "../Images/Formality/Formality4.jpg"

export default function ShowBox2() {
    return (
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
        >
            {props => (
                <div style={props}>
                    <div className="ShowBox2">
                        <div className="ShowBox2Text">
                        Navy theme classic tailored suit with shoulder pad paired with trouser.<br></br>
                        Underneath the suit is styled with a corset. <br></br>
                        The corset is made with boning to create structure and texture.<br></br>
                         The outfit is a combination of The Victoria Era and today. <br></br>
                        </div>
                        <div className="ShowBox2Images">
                        <div className="ShowBox1Image1">
                            <img
                                className="Personal_picture"
                                src={Formality4}
                                alt={"person image"}
                            />
                        </div>
                        <div className="ShowBox1Image">
                            <img
                                className="Personal_picture"
                                src={Formality3}
                                alt={"person image"}
                            />
                        </div>
                        
                        </div>
                    </div>
                </div>
            )}
        </Spring>
    )
}
