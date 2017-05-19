import React, {Component} from 'react';
import './AddPlantCard.css';

// This component should be passed a prop which will be a function that
// allows the CreatePlant modal to be rendered over the Home.js

export default class AddPlantCard extends Component {

  render() {
    let { showModal } = this.props
    return (
      <div className="add-plant-card" onClick={showModal}>
        <h2> Add a plant </h2>
      </div>
    );
  }

}
