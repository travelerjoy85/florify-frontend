import React, {Component} from 'react';
import api from '../../api';
import PlantCards from '../pages/PlantCards';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';
import NewPlant from '../modals/NewPlant';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            plantcards: [],
            isCreatePlantCardClicked: false,
            isDeleteButtonClicked: false
        };
    }

    // _fetchPlantCardList = () => {
    //   console.log("Hello!!!")
    //     api.getPlantCards()
    //         .then(res => {
    //             this.setState({ plantcards: res.body.plants })
    //         })
    //         .catch(console.error)
    // };

    // _handlePlantCardCreate = () => {
    //   this.setState({ isCreatePlantCardClicked: !this.state.isCreatePlantCardClicked })
    // }

    render() {
        let { plantcards } = this.state;
        return (
            <div className="home">
                <PlantCards/>
                {auth.isLoggedIn() ? <AddButton _handlePlantCardCreate={this._handlePlantCardCreate}/> : null}
                {this.state.isCreatePlantCardClicked ? <NewPlant _handlePlantCardCreate={this._handlePlantCardCreate} _fetchPlantCardList={this._fetchPlantCardList} /> : null }
            </div>
        );
    }

}
