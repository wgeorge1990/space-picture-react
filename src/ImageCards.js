import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const card = (image) => {
    return (
    <Card key={image.date}>
        <Card.Content>
            <Card.Header textAlign="center">
                {image.title}
            </Card.Header>
            <p>{image.explanation}</p>
            <Image src={image.hdurl} />
        </Card.Content>
    </Card> )
}

const ImageCards = (props) => {
    console.log(props.images)
    return(
        props.images.map(image => card(image)) )
}

export default ImageCards