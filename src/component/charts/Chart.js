import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    return (
      <div style={{maxHeight: '400px'}}>
        <h2>Line Example</h2>
        <Line
          data={this.props.data}
	         width={100}
	         height={50}
           tooltips= {{
             enabled: false
           }}
	         options={{
             maintainAspectRatio: false,
             tooltips: {
               enabled: false
             }
	          }}
          />
      </div>
    )
  }
}
