import React, { Component } from 'react';
import api from '../../api';
import './DeletePlantCard.css';
// This component should be passed a prop which will be a function that
// allows the CreatePlant modal to be rendered over the Home.js

export default class DeletePlantCard extends Component {

  render() {
    let { showModal } = this.props
    return (
      <div className="delete-plant-card">
        <button onClick={showModal}> Delete </button>
      </div>
    );
  }

}
