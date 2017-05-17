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
              updatedAt: ""
          };
      }

      componentDidMount() {
          this._fetchPlantCard()
      }

      _fetchPlantCard = () => {
          api.getPlantCards()
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
                     <PlantCard
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
              </div>
          );
     }

 }
