import React from 'react'
import { Card, Container, Image } from 'semantic-ui-react'
import ImageCards from './ImageCards'

class ImageContainer extends React.Component {
    render() {
        console.log(this.props.images)
        return(
                <Card.Group itemsPerRow={1}>
                        <ImageCards images={this.props.images}/>
                </Card.Group>
        )
    }
}

export default ImageContainer