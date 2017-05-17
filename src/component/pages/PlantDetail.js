import React, {Component} from 'react';
import './PlantDetail.css';
import Chart from '../charts/Chart.js'
import api from '../../api';
import moment from 'moment'

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
    console.log(this.props.id)
    console.log('ello', this.props)
      api.getPlantDetail(this.props.params.id)
      .then(res => {
        console.log(res.body)

        let datum = res.body.readings

        let humDataSet = this._dataSetFactory(HUMIDITY, datum.hum)
        let labels = datum.hum.map(el => moment(el.createdAt).format('h:mm:ss'))

        console.log(labels, humDataSet)

        this.setState({ data: {
          labels: labels,
          datasets: [humDataSet]
        } })
      })
      .catch(console.error)
  }




  _dataSetFactory = (type, dataArray) => {
    if (type === HUMIDITY) {
      return {
        fill: false,
        lineTension: 0.1,
        backgroundColor: humidityColor1,
        borderColor: humidityColor2,
        data: dataArray.map(el => el.reading)
      }
    }
    if (type === TEMPERATURE) {
      return {
        fill: false,
        lineTension: 0.1,
        backgroundColor: temperatureColor1,
        borderColor: temperatureColor2,
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
    console.log(this.state.data)
    return(
      <div className='plant-card'>
        <div>
          <h2>{ this.props.nickname }</h2>
          <p>{ this.props.name }</p>
          <p>{ this.props.description }</p>
        </div>
        {this.state.data &&
          <Chart data={this.state.data} />
        }
      </div>
    );
  }
}
