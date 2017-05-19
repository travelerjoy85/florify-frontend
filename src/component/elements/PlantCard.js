import React, {Component} from 'react';
import { Link } from 'react-router';
import './PlantCard.css';
// import auth from '../../auth';
import api from '../../api';
// import {browserHistory} from 'react-router';
import EditPlant from '../modals/EditPlant';

export default class PlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //isDeleteButtonClicked: false,
    showEditModal: false
    
    }
}

  _handleDelete = () => {
    api.deletePlant(this.props.id)
    .then(() => this.props.fetchPlants())
  }

  _toggleEditModal = () => this.setState({showEditModal: !this.state.showEditModaleModal})

  render() {
    // const isLoggedIn = auth.isLoggedIn();
    let { nickname, name, description, id } = this.props


      return(
        <div className="plant-card">

          <Link to={`/plant/${id}`}>
              <div className="card-container">
                <div className="card-item">
                  <h2>{ nickname }</h2>
                  <p>{ name }</p>
                  <p>{ description }</p>
                </div>
                <div className="card-item2">
                </div>
              </div>
            </Link>

          <div className="card-edit">
            <button className="plant-edit-button" onClick={()=>this.setState({showEditModal: true})}>Edit</button>

            <button className="plant-delete-button" onClick={this._handleDelete }>Delete</button>

          </div>
          {this.state.showEditModal ? <EditPlant plantData={this.props} closeModal={this._toggleEditModal}/> : null}

        </div>
      );
  }
} // export
