import React from "react";
import { Route, Switch } from "react-router-dom"
import { Homepage, About, Resume, NotFound } from "./components"

function Routes() {
    return <div>
        <Switch >
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resume" component={Resume} />
            <Route component={NotFound} />
        </Switch>
    </div>
}

export default Routes