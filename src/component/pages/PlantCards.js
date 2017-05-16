import React, {Component} from 'react';
import api from '../../api';
import PlantCard from '../elements/PlantCard';
import PlantDetail from '../modals/PlantDetail';
// import auth from '../../auth';
import './PlantCards.css';
import Util from '../../util';
//const changeTitle = require('../App').changeTitle;

export default class PlantCards extends Component {
    constructor() {
        super();
        this.state = {
            plants: [],
            nickname: "",
            name: "",
            description: "",
            maxtemp: "",
            mintemp: "",
            maxph: "",
            minph: "",
            maxhum: "",
            minhum: "",
            maxLux: "",
            minlux: "",
            updatedAt: "",
            isCreatePlantCardClicked: false
        };
    }

    componentDidMount() {
        this.fetchPlantData()
    }

    fetchPlantData = () => {
        api.getPlantCards()
        .then(res => {
            console.log("PlantCards->fetchPlantData", res.body.plants);
            this.setState({ plants: res.body.plants })
        })
        .catch(console.error)
    }

    _handlePlantCardCreate = () => {
      this.setState({ isCreatePlantCardClicked: !this.state.isCreatePlantCardClicked })
    }

    render() {
        let { plants } = this.state
        return (
            <div className="plantInfo">
                { plants.map(plant =>
                    <PlantCard
                        key={plant.id}
                        id={plant.id}
                        name={plant.name}
                        imageurl={plant.imageurl}
                        maxtemp={plant.maxtemp}
                        mintemp={plant.mintemp}
                        maxph={plant.maxph}
                        minph={plant.minph}
                        maxlux={plant.maxlux}
                        minlux={plant.minlux}
                        updatedAt={plant.updatedAt}
                    />
                )}
            </div>
        );
    }

}
