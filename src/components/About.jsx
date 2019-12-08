import React from "react"
import { Card, Typography, CardContent } from '@material-ui/core';

function About() {
    return (
        <div className="portfolioBody">
            <div className="aboutCard">
                <Card>
                    <img className="aboutImage" src={require("../images/contour_flowers.jpg")} alt=""/>
                    <CardContent>
                        <Typography component="p">
                            Hello! I am Chase Porter, 25 years old, I currently live in Berkeley, CA, and am from the town of Elk Grove (just South of Sacramento, CA). I graduated from UC Berkeley in 2017 with a degree in Electrical Engineering and Computer Science and a minor in the Practice of Art.
                            I spend my time divided between a wide range of interests: computer science, mathematics, reading, writing, making and studying music, and making and studying art. While the range is large, the focus, reason, and ambition for studying all of them is the same: to better
                            understand the context that I was raised in and thus understand my own views the best that I can. In practice this means studying as much as I can about the world around me and specifically the culture I was raised in. I read as much as I can about history, sociology, economics,
                            and most enjoy novels and art that speak to the human experience around these ideas (characters, voices, and experiences that love, live, despair, and rejoice in the context of these larger systems). I write and draw in order to realize my own confusion in what I know
                            about the world around me. Through writing, I come to critical junctions when my internal logic begins to break down and I come to ideas that I realize I have not spent the time to really examine. 
                            I try to examine every word I use to be sure I say only what I mean to and that I say it precisely. 

                            Art making follows a similar process. When I take the time to slow down and focus on what I see through the act of drawing I come to understand all the details I miss.

                            While this is true for any age, it feels particularly true today that technology has afforded us an ability to work on problems at an unprecedented scale, and has also created many new problems along the way. I am educated in computer science and trained as a software engineer and 
                            have committed myself to applying these skills to better understand the many nuanced problems that exist at scale throughout our culture.

                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default About;