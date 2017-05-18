import React, {Component} from 'react';
import './PlantDetail.css';
import Chart from '../charts/Chart.js'

const HUMIDITY = 'humidity'
const TEMPERATURE = 'temperature'
const LUX = 'lux'
const FERTILITY = 'fertility'

const humidityColor1 = 'rgba(50,50,200, 0.4)'
const humidityColor2 = 'rgba(50,50,200, 1)'
const temperatureColor1 = 'rgba(200,50,50, 0.4)'
const temperatureColor2 = 'rgba(200,50,50, 1)'
const luxColor1 = 'rgba(50,50,200, 0.4)'
const luxColor2 = 'rgba(50,50,200, 1)'
const fertilityColor1 = 'rgba(50,50,200, 0.4)'
const fertilityColor2 = 'rgba(50,50,200, 1)'


export default class PlantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {

      }
    };
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
  }

  _dataSetFactory = (type, dataArray) => {
    if (type === HUMIDITY) {
      return {
        fill: false,
        lineTension: 0.1,
        backgroundColor: humidityColor1,
        borderColor: humidityColor2,
        data: dataArray
      }
    }
    if (type === TEMPERATURE) {
      return {
        fill: false,
        lineTension: 0.1,
        backgroundColor: temperatureColor1,
        borderColor: temperatureColor2,
        data: dataArray
      }
    }
  }

  noLongerNecessaryJustForYourReference = () => {
    return {
      labels: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],
      datasets: [
        this._dataSetFactory(HUMIDITY, [34,56,12,34,33,88,11]),
        this._dataSetFactory(TEMPERATURE, [55,16,16,84,23,48,71])
      ]
    }
  }

  render() { // render chart
    return(
      <div className='plant-card'>
        <div>
          <h2>{ this.props.nickname }</h2>
          <p>{ this.props.name }</p>
          <p>{ this.props.description }</p>
        </div>

        <Chart data={this.state.data} />
      </div>
    );
  }
}
