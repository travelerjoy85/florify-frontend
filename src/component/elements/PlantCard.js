import React, {Component} from 'react';
import { Link } from 'react-router';
import './PlantCard.css';
import auth from '../../auth';
import api from '../../api'

export default class PlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    isDeleteButtonClicked: false
  }

  _handleDelete = () => {
    api.deletePlantCard(this.props.id);
  }

  render() {
    const isLoggedIn = auth.isLoggedIn();
    let { nickname, name, description, id } = this.props

    if(isLoggedIn){
      return(
        <div className="plant-card">

          <Link to={`/plants/${id}`}>
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
            <button onClick={this._handleSignup}>Edit</button>
            <button type="button" onClick={this._handleDelete}>Delete</button>
          </div>

        </div>
      );
    }
  }
}
