import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

const humidityColor2 = 'rgba(105, 142, 128, 1)'
const temperatureColor2 = 'rgba(19, 46, 61, 1)'
const fertilityColor2 = 'rgba(39, 74, 35, 1)'
const luxColor2 = 'rgba(166, 113, 15, 1)'


export default class Chart extends Component {
  render() {
    // console.log(this.props)
    return (
      <div style={{maxHeight: '400px'}}>
        <Line
          data={this.props.data}
          width={400}
          height={400}
          options={this.props.options}
        />
      </div>
    )
  }
}
