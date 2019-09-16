import React from 'react'
import './App.css'
import { Header, Button, Form, Dropdown, Container } from 'semantic-ui-react'
import ImageContainer from './ImageContainer'

class App extends React.Component {
  state = {
    nasaImages: [],
    newSearchCollection: [],
    rowCount: 3,
    month: "01",
    year: "2015",
  }

  /////FIRST WAY
  fetchNasaImageForEachDayOfMonth() {
    let dayList = ["01", "02", "03", "04", "05", "06", "07", "08", '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
    dayList.forEach(day => this.fetchDateFromNasa(day))
  }



  /////BETTER WAY
  fetchNasaImageTwoPointO() {
    let days = 10
    for (let i = 1; i < days; i++) {
      if (i <= 9) {
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
    // let year = '2017'
    let year = this.state.year
    // let month = '09'
    let month = this.state.month
    console.log(month)
    let date = `${year}-${month}-${day}`
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

  //    saveImageToDbJson = () => {
  //     console.log("saveImageToDbJson():" )
  // }

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
        rowCount: this.state.rowCount - 1
      })
    }
  }

  button = (text, funcCall) => (<Button basic onClick={funcCall}>{text}</Button>)

  handleMonthChange = (e, data) => {
    console.log(data.value)
    this.setState({
      month: data.value,
      nasaImages: []
    })
    this.fetchNasaImageTwoPointO()
  }
  handleYearChange = (e, data) => {
    console.log(data.value)
    this.setState({
      year: data.value,
      nasaImages: []
    })
    this.fetchNasaImageTwoPointO()
  }

  monthOptions = [
    { key: 1, text: 'January', value: '01' },
    { key: 2, text: 'February ', value: '02' },
    { key: 3, text: 'March', value: '03' },
    { key: 4, text: 'April', value: '04' },
    { key: 5, text: 'May', value: '05' },
    { key: 6, text: 'June', value: '06' },
    { key: 7, text: 'July', value: '07' },
    { key: 8, text: 'August', value: '08' },
    { key: 9, text: 'September', value: '09' },
    { key: 10, text: 'October', value: '10' },
    { key: 11, text: 'November', value: '11' },
    { key: 12, text: 'December', value: '12' }]

  yearOptions = [
    { key: 1, text: '1990', value: '1990' },
    { key: 2, text: '1991', value: '1991' },
    { key: 3, text: '1992', value: '1992' },
    { key: 4, text: '1993', value: '1993' },
    { key: 5, text: '1994', value: '1994' },
    { key: 6, text: '1995', value: '1995' },
    { key: 7, text: '1996', value: '1996' },
    { key: 8, text: '1997', value: '1997' },
    { key: 9, text: '1998', value: '1998' },
    { key: 10, text: '1999', value: '1999' },
    { key: 11, text: '2000', value: '2000' },
    { key: 12, text: '2001', value: '2001' },
    { key: 12, text: '2002', value: '2002' },
    { key: 12, text: '2003', value: '2003' },
    { key: 12, text: '2004', value: '2004' },
    { key: 12, text: '2005', value: '2005' },
    { key: 12, text: '2006', value: '2006' },
    { key: 12, text: '2007', value: '2007' },
    { key: 12, text: '2008', value: '2008' },
    { key: 12, text: '2009', value: '2009' },
    { key: 12, text: '2010', value: '2010' },
    { key: 12, text: '2011', value: '2011' },
    { key: 12, text: '2012', value: '2012' },
    { key: 12, text: '2013', value: '2013' },
    { key: 12, text: '2014', value: '2014' },
    { key: 12, text: '2015', value: '2015' },
    { key: 12, text: '2016', value: '2016' },
    { key: 12, text: '2017', value: '2017' },
    { key: 12, text: '2018', value: '2018' },
    { key: 12, text: '2019', value: '2019' }
  ]

  render() {
    return (
      <div>
        <Header as='h1' textAlign="center">SpacePictures </Header>
        <Container textAlign='center'>
        <Form onSubmit={this.submitForm}  >
          <Dropdown
            name='month'
            clearable
            options={this.monthOptions}
            selection
            onChange={this.handleMonthChange}
            placeholder="Month" />
          <Dropdown
            name='year'
            clearable
            options={this.yearOptions}
            selection
            onChange={this.handleYearChange}
            placeholder="Year" />
        </Form>
</Container>
        <Button.Group fluid>
          <Button onClick={this.increaseTiles}>Increase Tiles</Button>
          <Button.Or />
          <Button onClick={this.decreaseTiles}>Decrease Tiles</Button>
        </Button.Group>
        {this.state.nasaImages ?
          <ImageContainer
            images={this.state.nasaImages}
            rowCount={this.state.rowCount} /> : null}
      </div>
    )
  }
}

export default App;
