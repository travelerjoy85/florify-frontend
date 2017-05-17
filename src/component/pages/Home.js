import React, {Component} from 'react';

import api from '../../api';
import PlantCards from '../pages/PlantCards';
//import AddButton from '../elements/AddButton';
import AddButton2 from '../elements/AddButton2';
import auth from '../../auth';
import './Home.css';
import NewPlant from '../modals/NewPlant';
//import PlantDetail from '../pages/PlantDetail'



 export default class Home extends Component {
     constructor(props) {
         super(props);
         this.state = {
             isCreatePlantCardClicked: false,
             isDeleteButtonClicked: false
          };
      }

    _fetchPlantCard = () => {
         api.getPlantCards()
         .then(res => {
             this.setState({ plants: res.body })
         })
         .catch(console.error)
     }

      _handlePlantCardCreate = () => {
        this.setState({ isCreatePlantCardClicked: !this.state.isCreatePlantCardClicked })
      }


    render() {
        console.log(auth.isLoggedIn(), "check if loggedin!!!!")
        let { plantcards } = this.state;
        return (
            <div className="home">
                <PlantCards/>
                {auth.isLoggedIn() ? <AddButton2 _handlePlantCardCreate={this._handlePlantCardCreate}/> : null}
                {this.state.isCreatePlantCardClicked ? <NewPlant _handlePlantCardCreate={this._handlePlantCardCreate} _fetchPlantCard={this._fetchPlantCard} userId={this.userId}/> : null }
            </div>
        );
    }

 }
