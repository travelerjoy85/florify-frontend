import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class Chart extends Component {
  render() {
    return (
      <div style={{maxHeight: '400px'}}>
        <Line
          data={this.props.data}
	         width={400}
	         height={500}
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
