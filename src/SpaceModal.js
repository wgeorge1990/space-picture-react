import React from 'react'
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const images = [
  "https://apod.nasa.gov/apod/image/1805/AuroraSunrise_ISS_5568.jpg",
  "https://apod.nasa.gov/apod/image/1805/StoneHalo_Wallace_2048.jpg",
  "https://apod.nasa.gov/apod/image/1805/M101_3Days_New_APOD.jpg",
  "https://apod.nasa.gov/apod/image/1805/Pleiades_WiseAntonucci_5000.jpg"
];

export default class SpaceModal extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}


