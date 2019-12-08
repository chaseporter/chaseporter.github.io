import React from 'react';
import { NavLink } from "react-router-dom";
import { Instagram, LinkedIn, GitHub } from '@material-ui/icons';

function TitleBar() { 
    return (
        <div className="topBar">
            <NavLink exact to="/" className="menuItem" activeClassName="activeMenuItem">chase porter</NavLink>
            <NavLink to="/art" className="menuItem" activeClassName="activeMenuItem">art</NavLink>
            <NavLink to="/recent_reads" className="menuItem" activeClassName="activeMenuItem">recent reads</NavLink>
            <a className="menuItem" rel="noopener noreferrer" href={process.env.PUBLIC_URL + "/ChasePorterResume.pdf"} target="_blank">resume</a>
            <a className="iconMenuItem" rel="noopener noreferrer" href="https://www.instagram.com/chaseporter15" target="_blank">{<Instagram />}</a>
            <a className="iconMenuItem" rel="noopener noreferrer" href="https://www.linkedin.com/in/cporter15" target="_blank">{<LinkedIn />}</a>
            <a className="iconMenuItem" rel="noopener noreferrer" href="https://www.github.com/chaseporter" target="_blank">{<GitHub />}</a>
        </div>
    )
}

export default TitleBar;