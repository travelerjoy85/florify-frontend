import React, {Component} from 'react';
import api from '../../api';
import PlantCards from '../pages/PlantCards';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';
import NewPlant from '../modals/NewPlant';
import PlantCard from '../elements/PlantCard';
// TODO: import PlantCard
//import PlantCard from '../elements/Card';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantcards: [],
            isCreatePlantCardClicked: false,
            isDeleteButtonClicked: false
        };
    }

    _handlePlantCardCreate = () => {
      this.setState({ isCreatePlantCardClicked: !this.state.isCreatePlantCardClicked })
    }

    render() {
        let { plantcards } = this.state;
        return (
            <div className="home">
                <PlantCards/>
                {auth.isLoggedIn() ? <AddButton _handleButton={this._handlePlantCardCreate}/> : null}
                {this.state.isCreatePlantCardClicked ? <NewPlant _handlePlantCardCreate={this._handlePlantCardCreate} _fetchPlantCard={this._fetchPlantCard} plantId={this.plantId}/> : null }
            </div>
        );
    }

}
