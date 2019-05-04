import React from 'react'
import { Card, Container, Image } from 'semantic-ui-react'

class ImageCards extends React.Component {
    render() {
        return(
            this.props.images.map(image => 
                <Card key={image.date}>
                    <Card.Content>
                        <Card.Header>
                            {image.date}
                        </Card.Header>
                        <p>{image.explanation}</p>
                        <Image src={image.hdurl} />
                    </Card.Content>
                </Card>) )
    }
}
export default ImageCards