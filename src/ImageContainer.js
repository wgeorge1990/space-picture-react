import React, { Suspense, useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import ImageCard from './ImageCard'

class ImageContainer extends React.Component {
    render() {
        return(
                <Card.Group itemsPerRow={this.props.rowCount}>
                <Suspense fallback={<div>Loading...</div>}>
                       { this.props.images.map(image => <ImageCard key={image.date} image={image} />) }
                </Suspense>
                </Card.Group>
        )
    }
}
export default ImageContainer