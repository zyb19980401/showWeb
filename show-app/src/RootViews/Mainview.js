import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import FrontPage from "../FrontPage/FrontPage";
import ProfilePage from "../ProfilePage/ProfilePage"
import Formality from "../Formality/Formality"
import MaoBi from "../MaoBi/MaoBi"
class Mainview extends React.Component {
    render() {
        return (
            <div className="Mainview">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={FrontPage}/>
                        <Route exact path="/Profile" component={ProfilePage}/>
                        <Route exact path="/Profile/Formality" component={Formality}/>
                        <Route exact path="/Profile/Maobi" component={MaoBi}/>
                    </Switch>
                </BrowserRouter>
            </div>

        )

    }
}

export default Mainview;