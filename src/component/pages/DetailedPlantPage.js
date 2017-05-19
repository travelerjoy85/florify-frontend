import React, {Component} from 'react';
import './DetailedPlantPage.css';
import Chart from '../charts/Chart.js'
import api from '../../api';
import FontAwesome from 'react-fontawesome';

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

    this._fetchPlantCard()

  }


  _fetchPlantCard = () => {
      api.getPlantDetail(this.props.params.id, this.props.time)
      .then(res => {
        let datum = res.body

        let currentHum = datum.hum[datum.hum.length-1]
        let currentTemp = datum.temp[datum.temp.length-1]
        let currentLux = datum.lux[datum.lux.length-1]
        let currentFertility = datum.ph[datum.ph.length-1]

        let humDataSet = this._dataSetFactory(HUMIDITY, datum.hum)
        let tempDataSet = this._dataSetFactory(TEMPERATURE, datum.temp)
        let luxDataSet = this._dataSetFactory(LUX, datum.lux)
        let fertilityDataSet = this._dataSetFactory(FERTILITY, datum.ph)
        //
        // let humlabels = datum.hum.map(el => moment(el.createdAt).format('h:mm:ss'))
        // let templabels = datum.temp.map(el => moment(el.createdAt).format('h:mm:ss'))
        // let luxlabels = datum.lux.map(el => moment(el.createdAt).format('h:mm:ss'))
        // let fertilitylabels = datum.ph.map(el => moment(el.createdAt).format('h:mm:ss'))
        // // console.log(res.body)

        this.setState({ data: {
          labels: res.body.timeAxis,
          datasets: [humDataSet, fertilityDataSet, tempDataSet, luxDataSet]
        },
          nickname: res.body.nickname,
          name: res.body.name,
          description: res.body.description,
          currentHum: Math.round(currentHum),
          currentTemp: Math.round(currentTemp),
          currentLux: Math.round(currentLux),
          currentFertility: Math.round(currentFertility)
         })
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
        data: dataArray.map(el => el)
      }
    }
    if (type === TEMPERATURE) {
      return {
        label: 'temperature',
        fill: false,
        lineTension: 0.3,
        backgroundColor: temperatureColor1,
        borderColor: temperatureColor2,
        data: dataArray.map(el => el)
      }
    }
    if (type === LUX) {
      return {
        label: 'Light',
        fill: false,
        lineTension: 0.3,
        backgroundColor: luxColor1,
        borderColor: luxColor2,
        data: dataArray.map(el => el)
      }
    }
    if (type === FERTILITY) {
      return {
        label: 'pH',
        fill: false,
        lineTension: 0.3,
        backgroundColor: fertilityColor1,
        borderColor: fertilityColor2,
        data: dataArray.map(el => el)
      }
    }
  }

  render() { // render chart

     let { nickname, name, description, data, currentHum,
       currentTemp, currentLux, currentFertility } = this.state

    return(
      <div className='DetailedPlantPage'>
        <div className='DetailedPlantPage-content'>
          <div className='DetailedPlantPage-info'>
            <h1>{ nickname }</h1>
            <h4>{ name } </h4>
            <h4>{ description }</h4>
           <div className='DetailedPlantPage-info-box'>
             <FontAwesome className='hum-icon' name='tint' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
             <p>{ currentHum } %</p>
           </div>
            <div className='DetailedPlantPage-info-box' >
              <FontAwesome className='temp-icon' name='thermometer-three-quarters' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
              <p>{ currentTemp } &deg;C</p>
            </div>
            <div className='DetailedPlantPage-info-box'>
              <FontAwesome className='lux-icon' name='sun-o' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
              <p>{ currentLux }lux</p>
            </div>
            <div className='DetailedPlantPage-info-box'>
              <FontAwesome className='fertility-icon' name='flask' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
              <p>{ currentFertility } f* </p>
            </div>
          </div>
          <div className='DetailedPlantPage-chart'>
            { data &&
              <Chart data={ data }/>
            }
          </div>
        </div>
      </div>
    );
  }
}
