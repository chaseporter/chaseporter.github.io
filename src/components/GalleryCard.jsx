import React from 'react'
import { Card, Typography } from '@material-ui/core'
import LeftArrow from '@material-ui/icons/ChevronLeft'
import RightArrow from '@material-ui/icons/ChevronRight'

function GalleryCard(props) {
    return (
        <div className="portfolioBody">
            <LeftArrow className="arrow"/>
            <div className="galleryCard">
                <Card>
                    <Typography component="p">
                        On this card I will give a description of the work.
                    </Typography>
                </Card>
            </div>
            <RightArrow className="arrow"/>
            {/* <Fab >
                <LeftArrow />
            </Fab>
                <Fab>
            </Fab> */}
        </div>
    )
}

export default GalleryCard