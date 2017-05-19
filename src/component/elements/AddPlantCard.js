import React, {Component} from 'react';
import { Link } from 'react-router';
import './AddPlantCard.css';
import auth from '../../auth';

// This component should be passed a prop which will be a function that
// allows the CreatePlant modal to be rendered over the Home.js

export default class AddPlantCard extends Component {

  render() {
    let { nickname, name, description, id, showModal } = this.props
    return (
      <div className="add-plant-card" onClick={showModal}>
        <h2> Add a plant </h2>
      </div>
    );
  }

}
