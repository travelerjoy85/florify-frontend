import React, {Component} from 'react';
import './PlantDetail.css';

export default class PlantDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() { // render chart
    return(
      <div className='plant-card'>
        <div>
          <h2>{ nickname }</h2>
          <p>{ name }</p>
          <p>{ description }</p>
        </div>

      </div>
    );
  }
}
