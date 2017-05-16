import React, {Component} from 'react';
import api from '../../api';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';
// TODO: import PlantCard
//import PlantCard from '../elements/Card';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            plants: []
        };
    }

    componentDidMount() {
        this._fetchPlantCardList();
    }

    _fetchPlantCardList = () => {
        api.getPlantCardsList()
            .then(res => {
                this.setState({ plants: res.body })
            })
            .catch(console.error)
    };


    render() {
        let { plants } = this.state;
        return (
            <div className="home">
                { plants.map(plant =>
                    <Plants
                        key={plant.id}
                        id={plant.id}
                        nickname={plant.nickname}
                        name={plant.name}
                        description={plant.description}
                        maxtemp={plant.maxtemp}
                        mintemp={plant.mintemp}
                        maxph={plant.maxph}
                        minph={plant.minph}
                        maxlux={plant.maxlux}
                        minlux={plant.minlux}
                        updatedAt={plant.updatedAt}
                    />
                )}
                {auth.isLoggedIn() ? <AddButton this._handleOnClick /> : null}
            </div>
        );
    }

}