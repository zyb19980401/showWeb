import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import ProfilePage from "../ProfilePage/ProfilePage"
import JumpSuit from "../JumpSuit/JumpSuit"

class Mainview extends React.Component {
    render() {
        return (
            <div className="Mainview">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={FrontPage}/>
                        <Route exact path="/Profile" component={ProfilePage}/>
                        <Route exact path="/Profile/JumpSuit" component={JumpSuit}/>
                    </Switch>
                </BrowserRouter>
            </div>

        )

    }
}

export default Mainview;