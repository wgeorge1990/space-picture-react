import React, { useState, useEffect } from 'react'
import { Card, Image, Button  } from 'semantic-ui-react'

const saveImageToDbJson = (e, image) => {
    console.log("saveImageToDbJson():" )
    fetch('http://localhost:3000/images', {
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

const ImageCard = (props) => {
  const [description, toggleDescription] = useState(false)

  const [isSaved, saved] = useState(false)

  const [message, changeMessage] = useState('')

  const markAsSaved = (e) => {
        console.log('inside mark as saved')
        if(isSaved === false) {
            saved(true)
            saveImageToDbJson(e, props.image)
        }
        else if(isSaved === true) {
            changeMessage('already Saved')
        }
    }

    useEffect( () => { } )

    return(
        <Card >
        <Card.Content>
            <Card.Header textAlign="center">
                {props.image.title}
            </Card.Header>
            {description ? <p>{props.image.explanation}</p> : null}

            <Image src={props.image.hdurl} />
            {message}
            <Button.Group>
            <Button  onClick={ () => markAsSaved() }>
                Save Image
            </Button>
            <Button  onClick={ () => showDescription(description, toggleDescription) }>
                Show Description
            </Button>
            </Button.Group >
        </Card.Content >
    </Card>
    )
}
export default ImageCard