import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import LeftArrow from '@material-ui/icons/ChevronLeft';
import RightArrow from '@material-ui/icons/ChevronRight';
import galleryImages from "../Util.js"

const images = require.context("../images/", true)

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
                        <img className="galleryImage" src={images(galleryImages[this.state.index].src)} alt=""/>
                        <CardContent>
                            <Typography component="p">
                                {galleryImages[this.state.index].description}
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