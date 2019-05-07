import React, { useState } from 'react'

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

const showDescription = (description, toggleDescription) => {
   toggleDescription(!description)
}

const ImageCards = (props) => {
    //hook sets description: false = state
    const [description, toggleDescription] = useState(false)
    console.log(description)
    return(
        props.images.map(image =>
            <Card key={image.date}>
        <Card.Content>
            <Card.Header textAlign="center">
                {image.title}
            </Card.Header>
            {description ? <p>{image.explanation}</p> : null}
            <Image src={image.hdurl} />
            <Button.Group>
            <Button  onClick={(e) => saveImageToDbJson(e, image)}>
                Save Image
            </Button>
            <Button  onClick={() => showDescription(description, toggleDescription)}>
                Show Description
            </Button>
            </Button.Group >
        </Card.Content >
    </Card> ) 
    )
}
export default ImageCards