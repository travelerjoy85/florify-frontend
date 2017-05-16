import React, {Component} from 'react';
import api from '../../api';
import auth from '../../auth';
import './PlantCard.css';

export default class PlantCard extends Component {
    constructor() {
        super();
        this.state = {
            plants:[],
            bookmarks: [],
            updatedAt: ""
        };
    }

    componentDidMount() {
        this.fetchPlantData()
    }

    fetchPlantData = () => {
        api.getSinglePlantCard()
        .then(res => {
            this.setState({ plants: res.body })
        })
        .catch(console.error)
    }

    render() {
        let { plants } = this.state
        return (
            <div className="plantInfo">
                { plants.map(plant =>
                    <PlantInfo
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