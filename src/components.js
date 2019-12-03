import React from 'react';

const Homepage = () => {
    return "This page will just show my art gallery right away."
}

const About = () => {
    return (
        <div className="portfolioBody">
            "This page will give a little summary about myself."
        </div>
    )
}

const Resume = () => {
    return (
        <div className="portfolioBody">
            "This page should display my resume"
        </div>
    )
}

const NotFound = () => {
    return "404 Page not found"
}

export {Homepage, About, Resume, NotFound}