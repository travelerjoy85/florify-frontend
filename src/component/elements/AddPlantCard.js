import React, {Component} from 'react';
import { Link } from 'react-router';
import './AddPlantCard.css';
import auth from '../../auth';
import api from '../../api'

export default class AddPlantCard extends Component {
  
  _handleClickAddPant = () => {
    api.deletePlantCard(this.props.id);
  }

  render() {
    
    let { nickname, name, description, id } = this.props
    return (
      <div className="plant-card">
        <h2> Add a plant </h2>
      </div>
    );
  }
  
}
