import React, {Component} from 'react';
import './SinglePlantCard.css';

export default class SinglePlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { // render chart
    let {} = this.props
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
