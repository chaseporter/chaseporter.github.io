import React from 'react';
import { Card, Typography, CardMedia, CardContent } from '@material-ui/core';
import LeftArrow from '@material-ui/icons/ChevronLeft';
import RightArrow from '@material-ui/icons/ChevronRight';

const images = require.context("../images/", true)
const galleryImages = [
    {src: "./example.jpg", description: ""},
    {src: "./bike.jpg", description:""},
    {src: "./blackberries.jpg", description: ""},
]

class GalleryCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index:0
        }
        this.nextImage = this.nextImage.bind(this)
        this.prevImage = this.prevImage.bind(this)
    }

    nextImage() {
        this.setState({
            index: (this.state.index + 1) % galleryImages.length
        })
    }

    prevImage() {
        let newIndex = (this.state.index - 1) % galleryImages.length
        if (this.state.index <= 0) newIndex += galleryImages.length
        this.setState({
            index: newIndex
        })
    }

    render() {
        return (
            <div className="portfolioBody">
                <LeftArrow className="arrow" onClick={this.prevImage}/>
                <div className="galleryCard">
                    <Card>
                        <CardMedia 
                            image={images(galleryImages[this.state.index].src)}
                            className="galleryImage"
                            title="art example"
                        />
                        {/* <img src={require("../images/example.jpg")} height="42" width="42" alt=""/> */}
                        <CardContent>
                            <Typography component="p">
                                On this card I will give a description of the work.
                                {this.state.index}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <RightArrow className="arrow" onClick={this.nextImage}/>
            </div>
        )
    }
}

export default GalleryCard;