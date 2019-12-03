import React from "react";
import { Route, Switch } from "react-router-dom"
import "./App.css"
import TitleBar from "./components/TitleBar"
import { About, Resume, NotFound, Homepage } from "./components"

function App() {
    return (
    <div className="background">
        <TitleBar />
        <Switch >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route component={NotFound} />
        </Switch>
    </div>
    )
}

export default App