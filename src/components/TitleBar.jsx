import React from 'react'
import { NavLink } from "react-router-dom"

function TitleBar(props) { 
    return (
        <div className="topBar">
            <NavLink exact to="/" className="menuItem" activeClassName="activeMenuItem">art</NavLink>
            <NavLink to="/about" className="menuItem" activeClassName="activeMenuItem">about me</NavLink>
            <NavLink to="/resume" className="menuItem" activeClassName="activeMenuItem">resume</NavLink>
            <NavLink to="/notfound" className="menuItem" activeClassName="activeMenuItem">contact</NavLink>
        </div>
    )
}

export default TitleBar