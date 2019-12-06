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
                - <i>Novels, Tales, and Journeys</i> by Alexander Pushkin 
                - <i>Their Eyes Were Watching God</i> by Zora Neale Hurston 
                - <i>A People's History of the United States</i> by Howard Zinn 
                - <i>I Know Why the Caged Bird Sings</i> by Maya Angelou - 
                <br/>
                <br/>
                Recently Read
                <br/>
                    - <i>Pachinko</i> by Min Jin Lee
                    - <i>The Color of Law</i> by Richard Rothstein
                    - <i>Another Country</i> and <i>Notes of a Native Son</i> by James Baldwin
                    - <i>We Were 8 Years in Power</i> by Ta-Nehisi Coates
                    - <i>Showa: A History of Japan</i> by Shigeru Mizuki
                    - <i>Globalization and Its Discontents</i> by Joseph Stiglitz
                    - <i>Hopes and Prospects</i> by Noam Chomsky
                    - <i>Americanah</i> by Chimamanda Ngozi Adichie
                    - <i>Selected Poems</i> by Langston Hughes 
                    - <i>The Things We Don't Do</i> by Andres Neuman
                    - <i>The Road</i> by Cormac McCarthy
                    - <i>Women of Crisis: Lives of Struggle and Hope</i> by Robert Coles
                    - <i>Sophie's World</i> by Jostein Gardner
                    - <i>Siddhartha</i> by Hermann Hesse -
                <br/>
                <br/>
                To Read
                <br/>
                    - <i>House of the Spirits</i> by Isabel Allende
                    - <i>The Uninhabitable Earth: Life After Warming</i> by David Wallace-Wells 
                    - <i>The Fire Next Time</i> by James Baldwin
                    - <i>The Samurai's Garden</i> by Gale Tsukiyama -
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