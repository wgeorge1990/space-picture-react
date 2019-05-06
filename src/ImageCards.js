import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const saveImageToDbJson = () => {
    console.log("saveImageToDbJson():" )
}

const showDescription = () => {
    console.log('showDescription():')
}

const card = (image) => {
    return (
    <Card key={image.date}>
        <Card.Content>
            <Card.Header textAlign="center">
                {image.title}
            </Card.Header>
            {/* <p>{image.explanation}</p> */}
            <Image src={image.hdurl} />
            <Button  onClick={saveImageToDbJson}>
                Save Image
            </Button>
            <Button  onClick={showDescription}>
                Show Description
            </Button>
        </Card.Content>
    </Card> )
}

const ImageCards = (props) => {
    console.log(props.images)
    return(
        props.images.map(image => card(image)) )
}

export default ImageCards