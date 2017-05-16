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
          <h2>{ this.props.nickname }</h2>
          <p>{ this.props.name }</p>
          <p>{ this.props.description }</p>
        </div>

      </div>
    );
  }
}
