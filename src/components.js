import React from 'react';

const About = () => {
    return (
        <div className="portfolioBody">

        </div>
    )
}

const RecentReads = () => {
    return (
        <div className="portfolioBody" >
            <p style={{margin: "20px"}}>
                Currently Reading
                <br/>
                - Alexander Pushkin 
                - Their Eyes Were Watching God
                <br/>
                <br/>
                Recently Read
                <br/>
                    - Pachinko
                    - The Color of Law
                    - Another Country
                    - We Were 8 Years in Power
                    - A History of Japan
                    - Globalization and Its Discontents 
                    - A People's History of the United States
                    - Hopes and Prospects
                    - Americanah
                    - Maya Angelou's poetry
                    - I Know Why the Caged Bird Sings 
                    - Langston Hughs poetry
                    - Notes of a Native Son
                    - The Things We Don't Do
                    - The Road
                    - Women of Crisis
                    - Sophie's World
                    - The Prophet
                <br/>
                <br/>
                To Read
                <br/>
                    - House of the Spirits
                    - The Uninhabitable Earth
                    - The Fire Next Time
            </p>
        </div>
    )
}

const NotFound = () => {
    return (
        <div className="portfolioBody">
            404 Page not found
        </div>
    )
}

export {About, RecentReads, NotFound};