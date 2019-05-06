import React from 'react'
import './App.css'
import {Header, Button} from 'semantic-ui-react'
import ImageContainer from './ImageContainer'


class App extends React.Component {
  state = {
    nasaImages: [],
    rowCount: 2

  }
        /////FIRST WAY
  fetchNasaImageForEachDayOfMonth() {
    let dayList = ["01","02","03","04","05","06","07","08",'09','10','11','12','13','14','15','16','17','18','19','20']
    dayList.forEach(day => this.fetchDateFromNasa(day))
  }

        /////BETTER WAY
  fetchNasaImageTwoPointO() {
    let days = 29
    for(let i = 1; i < days; i++) {
      if (i<=9 ) {
        let day = `0${i}`
        this.fetchDateFromNasa(day)
      } else {
        let day = i
        this.fetchDateFromNasa(day)
      }
    }
  }

        ////FETCH FROM NASA APOD API AND COPYING STATE INTO
  fetchDateFromNasa(day) {
    const apiKey = 'api_key=lGkMtTfySko0M2Ri7QvmcUUeBznG2ug9y7nft6vb'
    let date = `2018-05-${day}`
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&${apiKey}`
    fetch(url)
    .then(resp => resp.json()).then(data => this.setState({
      nasaImages: [...this.state.nasaImages, data]
    }))
  }
        ////ON COMPONENT MOUNT
  componentDidMount() {
    //this.fetchNasaImageForEachDayOfMonth()
    this.fetchNasaImageTwoPointO()
  }

  increaseTiles = () => {
    console.log('Increase tiles')
    this.setState({
      rowCount: this.state.rowCount + 1
    })
}

  decreaseTiles = () => {
    console.log('Decrease tiles')
    if (this.state.rowCount >= 2) {
      this.setState({
        rowCount: this.state.rowCount -1
      }) 
    }
  }

  button = (text, funcCall) => ( <Button onClick={funcCall}>{text}</Button> )

  render() {
    return(
      <div>
        <Button.Group>
          {this.button("Increase tiles", this.increaseTiles)}
          <Button.Or />
          {this.button("Decrease Tiles", this.decreaseTiles)}
        </Button.Group>
        <Header  as='h1' textAlign="center">SpacePictures </Header>
            {this.state.nasaImages.length === 28 ? 
            <ImageContainer 
                images={this.state.nasaImages}
                rowCount={this.state.rowCount}/> : null}
      </div>
    ) 
  }
}

export default App;
