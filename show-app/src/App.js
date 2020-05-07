import React, { Component } from "react";
import "./App.css";
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

const PORT = process.env.PORT || 8000; app.listen(PORT, () => { console.log(`App listening on port ${PORT}!`); });
export default App;
