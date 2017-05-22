import React, { Component } from 'react';
import './DeletePlant.css';
import api from '../../api';

export default class DeletePlant extends Component {

  // _handleDelete = (event) => {
  //   event.preventDefault();
  //   console.log("passing or not????", this.props.id);
  //     api.deletePlant(this.props.id)
  //     .then(() => this.props.fetchPlants)
  // }

  render(){
    console.log("DeletePlant.js render is working??????");
    return(
      <div className="delete-plant-modal">
          {/*closing button*/}
          {/* <span className="close-icon"><a href="/">×</a></span> */}
          <h1>Delete Plant Card ?</h1>
            <button className="confirm-delete-button" onClick={this._handleDelete}>Delete</button>
            <button className="cancel-delete-button"><a href="/">Cancel</a></button>
      </div>
    );
  }
}
