import React, {Component} from 'react';
import './DetailedPlantPage.css';
import Chart from '../charts/Chart.js'
import api from '../../api';
import moment from 'moment'

const HUMIDITY = 'hum'
const TEMPERATURE = 'temp'
const LUX = 'lux'
const FERTILITY = 'ph'

const humidityColor1 = 'rgba(50,50,200, 0.4)'
const humidityColor2 = 'rgba(50,50,200, 1)'
const temperatureColor1 = 'rgba(200,50,50, 0.4)'
const temperatureColor2 = 'rgba(200,50,50, 1)'
const luxColor1 = 'rgba(50,50,200, 0.4)'
const luxColor2 = 'rgba(50,50,200, 1)'
const fertilityColor1 = 'rgba(50,50,200, 0.4)'
const fertilityColor2 = 'rgba(50,50,200, 1)'


export default class DetailedPlantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // fetch data for default selection (just humidity)
    // should retrieve labels (aka x-axis)
    // and x-axis data
    // pass it through factory with the type
    // to get the datasets you want.

    // setState with the result of this process     SHOULD LOOK SOMETHING LIKE::
    //  data: {
    //   labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
    //   datasets: [
    //     {
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: humidityColor1,
    //       borderColor: humidityColor2,
    //       data: dataArray
    //     }
    //   ]
    // }
    //  GJ
    this._fetchPlantCard()

  }


  _fetchPlantCard = () => {
      api.getPlantDetail(this.props.params.id)
      .then(res => {

        let datum = res.body.readings
        console.log(res.body.readings)

        let humDataSet = this._dataSetFactory(HUMIDITY, datum.hum)
        let tempDataSet = this._dataSetFactory(TEMPERATURE, datum.temp)
        let luxDataSet = this._dataSetFactory(LUX, datum.lux)
        let fertilityDataSet = this._dataSetFactory(FERTILITY, datum.ph)

        let humlabels = datum.hum.map(el => moment(el.createdAt).format('h:mm:ss'))
        let templabels = datum.temp.map(el => moment(el.createdAt).format('h:mm:ss'))
        let luxlabels = datum.lux.map(el => moment(el.createdAt).format('h:mm:ss'))
        let fertilitylabels = datum.ph.map(el => moment(el.createdAt).format('h:mm:ss'))

        this.setState({ data: {
          labels: humlabels,
          datasets: [humDataSet, fertilityDataSet, tempDataSet, luxDataSet]
        } })
      })
      .catch(console.error)
  }




  _dataSetFactory = (type, dataArray) => {
    if (type === HUMIDITY) {
      return {
        label: 'humidity',
        fill: false,
        lineTension: 0.3,
        backgroundColor: humidityColor1,
        borderColor: humidityColor2,
        data: dataArray.map(el => el.reading)
      }
    }
    if (type === TEMPERATURE) {
      return {
        label: 'temperature',
        fill: false,
        lineTension: 0.3,
        backgroundColor: temperatureColor1,
        borderColor: temperatureColor2,
        data: dataArray.map(el => el.reading)
      }
    }
    if (type === LUX) {
      return {
        label: 'Light',
        fill: false,
        lineTension: 0.3,
        backgroundColor: luxColor1,
        borderColor: luxColor2,
        data: dataArray.map(el => el.reading)
      }
    }
    if (type === FERTILITY) {
      return {
        label: 'pH',
        fill: false,
        lineTension: 0.3,
        backgroundColor: fertilityColor1,
        borderColor: fertilityColor2,
        data: dataArray.map(el => el.reading)
      }
    }
  }

  noLongerNecessaryJustForYourReference = () => {
    return {
      labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
      datasets: [
        // this._fetchPlantCard(HUMIDITY, {this.state.plant.readings.hum}),
        // this._fetchPlantCard(TEMPERATURE, {this.state.plant.readings.temp}),
        // this._dataSetFactory(LUX, {this.state.plant.readings.lux}),
        // this._dataSetFactory(FERTILITY, {this.state.plant.readings.ph})
      ]
    }
  }

  render() { // render chart

    return(
      <div className='DetailedPlantPage'>
        <div className='DetailedPlantPage-content'>
          <div className='DetailedPlantPage-info'>
            <h2>HELLO</h2>
            <p>{ this.props.name }</p>
            <p>{ this.props.description }</p>
          </div>
          <div className='DetailedPlantPage-chart'>
            {this.state.data &&
              <Chart data={this.state.data}/>
            }
          </div>
        </div>
      </div>
    );
  }
}
