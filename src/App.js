import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import TitleBar from "./components/TitleBar";
import GalleryCard from "./components/GalleryCard";
import { RecentReads, NotFound } from "./components";
import About from "./components/About"

function App() {
    return (
    <div className="background">
        <TitleBar />
        <Switch >
            <Route exact path="/" component={About} />
            <Route exact path="/art" component={GalleryCard} />
            <Route exact path="/recent_reads" component={RecentReads} />
            <Route component={NotFound} />
        </Switch>
    </div>
    )
}

export default App;