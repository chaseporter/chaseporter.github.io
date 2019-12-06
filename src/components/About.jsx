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
                            {/* Hello! I am Chase Porter, 25 years old, I currently live in Berkeley, CA, and am from the town of Elk Grove (just South of Sacramento, CA). I graduated from UC Berkeley in 2017 with a degree in Electrical Engineering and Computer Science and a minor in the Practice of art.
                            I spend my time divided between a wide range of interests: computer science, mathematics, reading, writing, making and studying music, and making and studying art. While the range is large, the focus, reason, and ambition for studying all of them is the same: to better
                            understand the context that I was raised in and thus understand my own views the best that I can. In practice this means studying as much as I can about the world around me and specifically the culture I was raised in. I read as much as I can about history, sociology, economics,
                            and most enjoy novels and art that speak to the human experience around these ideas (characters and experiences that love, live, rejoice, and despair in the context of these larger systems out of their control). I write and draw in order to realize my own confusion in what I know
                            about the worl around me. Through writing, I come to critical junctions when my internal logic begins to break down, I realize I don't have much to say about a particular topic as I thought I did, and I come to ideas that I realize I have not spent the time to really examine how 
                            I feel. I try to examine every word I use so I can be sure I at least know what I am really saying. 

                            Art making follows a similar process. Through the act of drawing or painting I come to understand all the details I miss when I take the time to really focus on what I see, and thus calls
                            into attention everything I must miss when I go about my days. Ultimately this creates humility, the realization that I miss so much and reaffirms my committment to take the time to study, listen, and learn. 

                            Through this process, one thing becomes very clear: the degree to which institutions and systems of power the world over are founded, built on top of, and self reinforced with oppression and inequality. This common thread extends from the deep past right up to the common day and 
                            involve innumerable aspects of our lives. The times now, as with all other times, offer unprecedented human ability through the technology we have developed. In studying computer science and mathematics I hope to apply the cutting edge of technology to create new ways of understanding
                            and confronting problems that compound with interest as time goes on and create increasingly complex problems for society to confront to survive. */}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default About;