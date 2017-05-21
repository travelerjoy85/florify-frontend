import React, { Component } from 'react';
import './EditPlant.css'
import api from '../../api'

export default class DeletePlant extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  //
  // componentDidUpdate = (prevProps, prevState) => {
  //   if(this.props.prevState !== this.state){
  //     return this._fetchPlants();
  //   }
  // }

  _handleDelete = () => {
    console.log(this.props, "_handleDelete is working???");
    api.deletePlant(this.props.id)
    .then(() => this.props.fetchPlants())
  }

  render(){
    console.log(this._handleDelete, "delete window works???");
    return(
      <div className="create__card-button" onClick={() => {if(confirm('Delete the item?')) {this._handleDelete} ;}}>
        <h5 className="plant-delete-button" ><a href="/">Delete</a></h5>
      </div>
    );
  }
}
