import React, {Suspense, lazy} from 'react'
import { Card } from 'semantic-ui-react'
//import ImageCards from './ImageCards'
//first attempt to code split
const ImageCards = React.lazy(() => import('./ImageCards'));

class ImageContainer extends React.Component {
    render() {
        console.log(this.props.images)
        return(
                <Card.Group itemsPerRow={2}>
                <Suspense fallback={<div>Loading...</div>}>
                        <ImageCards images={this.props.images}/>
                </Suspense>
                </Card.Group>
        )
    }
}

export default ImageContainer