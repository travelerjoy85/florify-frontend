import React, { Component } from 'react';
import './EditPlant.css'
import api from '../../api'

const ENTER = 13

export default class EditPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.plantData.id,
      nickname: this.props.plantData.nickname,
      name: this.props.plantData.name,
      description: this.props.plantData.description,
      maxtemp: this.props.plantData.maxtemp,
      mintemp: this.props.plantData.mintemp,
      maxph: this.props.plantData.maxph,
      minph: this.props.plantData.minph,
      maxhum: this.props.plantData.maxhum,
      minhum: this.props.plantData.minhum,
      maxlux: this.props.plantData.maxlux,
      minlux: this.props.plantData.minlux
    };
  }

   plantId = () => {
     return this.props.params.id;
   }

  _submitCard = (event) => {
    event.preventDefault();

    let {
      name, nickname, description, maxtemp, mintemp, maxph, minph, maxhum,
      minhum, maxlux, minlux
    } = this.state;

    if(nickname){
      api.updatePlant({
        id: this.state.id,
        nickname: nickname,
        name: name,
        description: description,
        maxtemp: maxtemp,
        mintemp: mintemp,
        maxph: maxph,
        minph: minph,
        maxhum: maxhum,
        minhum: minhum,
        maxlux: maxlux,
        minlux: minlux
       }).catch(console.error)
    }
    this.props.closeModal()
  }

  render(){
    console.log(this.props, "this is to test if EditPlant form is rendered");
    return(
      <div className="edit-plant-modal">
          <h1>Edit Plant Card</h1>
          <h5>Nickname</h5>
          <input type="text" value={this.state.nickname}
            onChange={({target})=>this.setState({nickname:target.value})}/>
          <h5>Name</h5>
          <input type="text" value={this.state.name}
            onChange={({target})=>this.setState({name:target.value})}/>
          <h5>Description</h5>
          <input type="test" value={this.state.description}
            onChange={({target})=>this.setState({description:target.value})}/>
          <h5>Maxtemp</h5>
          <input type="test" value={this.state.maxtemp}
            onChange={({target})=>this.setState({maxtemp:target.value})}/>
          <h5>Mintemp</h5>
          <input type="test" value={this.state.mintemp}
            onChange={({target})=>this.setState({mintemp:target.value})}/>
          <h5>Maxph</h5>
          <input type="test" value={this.state.maxph}
            onChange={({target})=>this.setState({maxph:target.value})}/>
          <h5>Minph</h5>
          <input type="test" value={this.state.minph}
            onChange={({target})=>this.setState({minph:target.value})}/>
          <h5>Maxhum</h5>
          <input type="test" value={this.state.maxhum}
            onChange={({target})=>this.setState({maxhum:target.value})}/>
          <h5>Minhum</h5>
          <input type="test" value={this.state.minhum}
            onChange={({target})=>this.setState({minhum:target.value})}/>
          <h5>Maxlux</h5>
          <input type="test" value={this.state.maxlux}
            onChange={({target})=>this.setState({maxlux:target.value})}/>
          <h5>Minlux</h5>
          <input type="test" value={this.state.minlux}
            onChange={({target})=>this.setState({minlux:target.value})}/>
          <div className="create__card-button">
            <button onClick={this._submitCard}>Submit Plant</button>
          </div>
      </div>
    );
  }

}
