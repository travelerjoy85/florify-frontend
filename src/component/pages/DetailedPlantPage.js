import React, {Component} from 'react';
import './DetailedPlantPage.css';
import Chart from '../charts/Chart.js'
import api from '../../api';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import * as util from '../../util';


export default class DetailedPlantPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      period: "hour",
      hum: true,
      temp:false,
      lux: true,
      ph:false,
      nickname: '',
      name: '',
      description: '',
      data: '',
      currentHum: '',
      currentTemp: '',
      currentLux: '',
      currentFertility: ''
    };
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
      api.getPlantDetail(this.props.params.id, this.state.period)
      .then(res => {
        let datum = res.body
        // console.log(res.body)
        let nickname = (res.body.plant.nickname)
        let name = (res.body.plant.name)
        let description = (res.body.plant.description)

        let currentHum = datum.hum[datum.hum.length-1]
        let currentTemp = datum.temp[datum.temp.length-1]
        let currentLux = datum.lux[datum.lux.length-1]
        let currentFertility = datum.ph[datum.ph.length-1]

        let humDataSet = util.dataSetFactory(util.HUMIDITY, datum.hum)
        let tempDataSet = util.dataSetFactory(util.TEMPERATURE, datum.temp)
        let luxDataSet = util.dataSetFactory(util.LUX, datum.lux)
        let fertilityDataSet = util.dataSetFactory(util.FERTILITY, datum.ph)

        let labels = res.body.timeAxis.map(el => moment(el).format('h:mm'))

        let options = util.optionsFactory(
          [util.HUIDITY] //, util.TEMPERATURE, util.FERTILITY, util.LUX]
        )

        // console.log(humDataSet)
        console.log(options)

        this.setState({
          data: {
            labels: labels,
            datasets: [humDataSet] //, tempDataSet, luxDataSet, fertilityDataSet]
          },
          option: options,
          nickname: nickname,
          name: name,
          description: description,
          currentHum: Math.round(currentHum),
          currentTemp: Math.round(currentTemp),
          currentLux: Math.round(currentLux),
          currentFertility: Math.round(currentFertility)
         })
      })
      .catch(console.error)
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
              <Chart data={ data } options={this.state.options}/>
            }
          </div>
        </div>
      </div>
    );
  }
}
