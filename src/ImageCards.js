import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const saveImageToDbJson = (e, image) => {
    console.log("saveImageToDbJson():" )
    fetch('http://localhost:3001/images', {
                method: 'POST',
                headers : {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body:JSON.stringify({
                    date: image.date, 
                    explanation: image.explanation,
                    hdurl: image.hdurl,
                    media_type: image['media_type'],
                    title: image.title,
                    url: image.url })
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
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
            <Button.Group>
            <Button  onClick={(e) => saveImageToDbJson(e, image)}>
                Save Image
            </Button>
            <Button  onClick={showDescription}>
                Show Description
            </Button>
            </Button.Group >
        </Card.Content >
    </Card> )
}

const ImageCards = (props) => {
    console.log(props.images)
    return(
        props.images.map(image => card(image)) )
}

export default ImageCards