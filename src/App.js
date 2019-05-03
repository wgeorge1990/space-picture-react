import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    nasaImages: []
  }

  fetchNasaImageForEachDayOfMonth() {
    let dayList = ["01","02","03","04","05","06","07","08",'09','10','11','12','13','14','15','16','17','18','19','20']
    dayList.forEach(day => this.fetchDateFromNasa(day))
  }

  fetchDateFromNasa(day) {
    const apiKey = 'api_key=lGkMtTfySko0M2Ri7QvmcUUeBznG2ug9y7nft6vb'
    let date = `2018-05-${day}`
    let url = `https://api.nasa.gov/planetary/apod?date=${date}&${apiKey}`
    fetch(url)
    .then(resp => resp.json()).then(data => this.setState({
      nasaImages: [...this.state.nasaImages, data]
    }))

  }
  componentDidMount() {
    this.fetchNasaImageForEachDayOfMonth()
  }
  render() {
    return(
      <h1>Hello</h1>
    ) 
  }
}

export default App;
