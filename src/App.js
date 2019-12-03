import React from "react";
import { Route, Switch } from "react-router-dom"
import "./App.css"
import TitleBar from "./components/TitleBar"
import GalleryCard from "./components/GalleryCard"
import { About, NotFound } from "./components"
// import { Divider } from "@material-ui/core"

function App() {
    return (
    <div className="background">
        <TitleBar />
        {/* <Divider style={{color: "#eeeeee"}}/> */}
        <Switch >
            <Route exact path="/" component={GalleryCard} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </div>
    )
}

export default App