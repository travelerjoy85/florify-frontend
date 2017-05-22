import React, { Component } from 'react';
import './CreatePlant.css';
import api from '../../api';
import './DeletePlant.css';
import FontAwesome from 'react-fontawesome';

const ENTER = 13

// This component is rendered conditionally by Home.js
// There should be a piece of state on Home.js which controls wether this
// component is rendered.
//
// This component should allow the user to fill out the necessary info to create
// a new plant.
//
// Upon hitting submit this component will :
// 1) Make a api call to the backend to save the new plant
// 2) THEN it will call a function (which was passed to it as a prop by Home.js)
//     which changes that piece of state on Home.js which conditionally renders
//     this modal to now hide it...

export default class CreatePlant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   plantId = () => {
     return this.props.params.id;
   }

  _submitCard = (event) => {
    event.preventDefault();
    let{
      nickname: {value: nickname},
      name: {value: name},
      description: {value: description}
    } = this.refs;
    if(nickname){
      api.addPlant({
        nickname: nickname,
        name: name,
        description: description
      }).then(() => {
        this.props.fetchPlants();
      })
      .catch(console.error)
    }
    this.props.closeModal()
  }

  _handleTyping = (e) => {
    if(this.state && this.state.error){
       this.setState({error: null})
    }
    if(e.keyCode === ENTER){
       this._submitCard(event);
     }
    }

  render(){
    return(
      <div className="create-plant-modal">

        <h1>Create Plant Card</h1>
        <input type="text" placeholder="Nickname" ref="nickname" onKeyUp={this._handleTyping}/><br/>
        <input type="text" placeholder="Name" ref="name" onKeyUp={this._handleTyping}/><br/>
        <input type="test" placeholder="Description" ref="description" onKeyUp={this._handleTyping}/><br/>

        <div className="create__card-button">
            <button onClick={this._submitCard}><FontAwesome className='submitCard-icon' name='check' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
            <button><a href="/"><FontAwesome className='cancel-icon' name='times' size='3x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></a></button>
        </div>
      </div>
    )
  }
}
