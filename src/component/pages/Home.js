import React, {Component} from 'react';
import api from '../../api';
import PlantCards from '../pages/PlantCards';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';
import NewPlant from '../modals/NewPlant';

import PlantDetail from '../modals/PlantDetail'


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            isCreatePlantCardClicked: false,
            isDeleteButtonClicked: false
        };
    }

    render() {
        let { plantcards } = this.state;
        return (
            <div className="home">
                {/* <PlantCards/> */}

                <PlantDetail />

                {auth.isLoggedIn() ? <AddButton _handlePlantCardCreate={this._handlePlantCardCreate}/> : null}
                {this.state.isCreatePlantCardClicked ? <NewPlant _handlePlantCardCreate={this._handlePlantCardCreate} _fetchPlantCardList={this._fetchPlantCardList} /> : null }
            </div>
        );
    }

}
