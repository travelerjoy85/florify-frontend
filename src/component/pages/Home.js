import React, {Component} from 'react';
import api from '../../api';
import PlantCard from '../elements/PlantCard';
import AddPlantCard from '../elements/AddPlantCard';
// import auth from '../../auth';
import './Home.css';
import CreatePlant from '../modals/CreatePlant';



// This component is the INDEXROUTE "/"
// it is responsible for fetching the plantsdata and map it to a
// bunch of <PlantCard />'s.
//
// This component is also responsible for displaying the AddPlantCard
// button along with the PlantCards. Upon clicking the <AddPlantCard />
// this component will set it's own state to allow the <CreatePlant />
// modal to render on the page. It will also pass a function to CreatePlant
// which allows it to close itself upon submitting.

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCreateModal: false
    }
  }

  componentDidMount() {
      this._fetchPlants()
  }

  _fetchPlants = () => {
      api.getPlants(localStorage.token)
      .then(res => {
          this.setState({ plants: res.body })
            console.log(this.state)
      })
      
      .catch(console.error)
  }

  _toggleCreateModal = () => this.setState({showCreateModal: !this.state.showCreateModal})
  render() {
      let { plants } = this.state
      return (
          <div className="home">
            { plants && plants.map(plant =>
              <PlantCard
                fetchPlants={this._fetchPlants}
                key={plant.id}
                id={plant.id}
                nickname={plant.nickname}
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

            <AddPlantCard showModal={ this._toggleCreateModal } />
            {this.state.showCreateModal &&
          <div className="backdrop">
              <CreatePlant closeModal={this._toggleCreateModal}/>
          </div>
          }

          </div>
      );
  }


 }
