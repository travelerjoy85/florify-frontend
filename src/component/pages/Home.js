import React, {Component} from 'react';
import api from '../../api';
import PlantCards from '../elements/PlantCards';
import AddButton from '../elements/AddButton';
import auth from '../../auth';
import './Home.css';
import CreatePlantCardList from '../modals/CreatePlantCardList';
// TODO: import PlantCard
//import PlantCard from '../elements/Card';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            plantcards: [],
            isCreatePlantCardClicked: false,
            isDeleteButtonClicked: false
        };
    }

    componentDidMount() {
        this._fetchPlantCardList();
    }

    _fetchPlantCardList = () => {
        api.getPlantCardsList()
            .then(res => {
                this.setState({ plantcards: res.body })
            })
            .catch(console.error)
    };

    _handlePlantCardCreate = () => {
      this.setState({ isCreatePlantCardClicked: !this.state.isCreatePlantCardClicked })
    }

    render() {
        let { plantcards } = this.state;
        return (
            <div className="home">
                { plantcards.map(plantcard =>
                    <PlantCards
                        key={plantcard.id}
                        id={plantcard.id}
                        nickname={plantcard.nickname}
                        name={plantcard.name}
                        description={plantcard.description}
                        maxtemp={plantcard.maxtemp}
                        mintemp={plantcard.mintemp}
                        maxph={plantcard.maxph}
                        minph={plantcard.minph}
                        maxlux={plantcard.maxlux}
                        minlux={plantcard.minlux}
                        updatedAt={plantcard.updatedAt}
                    />
                )}

                {auth.isLoggedIn() ? <AddButton _handlePlantCardCreate={this._handlePlantCardCreate}/> : null}
                {this.state.isCreatePlantCardClicked ? <CreatePlantCardList _handlePlantCardCreate={this._handlePlantCardCreate} _fetchPlantCardList={this._fetchPlantCardList} /> : null }

            </div>
        );
    }

}
