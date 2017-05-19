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

  _submitCard = () => {
    let{
      nickname: {value: nickname},
      name: {value: name},
      description: {value: description}
    } = this.refs;
    if(nickname){
      api.updatePlant({
        id: this.state.id,
        nickname: nickname,
        name: name,
        description: description
       }).catch(console.error)
    }
    this.props.closeModal()
  }


   _handleTyping = (fieldName, event) => {
     console.log(fieldName, "test!!!!");
     console.log(event.target.value, "ssssss");
     if (fieldName === 'nickname') {
       this.setState({
         nickname:  event.target.value
       })
     }
    //  if(this.state && this.state.error){
    //    this.setState({
    //     //  error: null,
    //      nickname:
    //    })
    //  }
     if(event.keyCode === ENTER){
       this._submitCard()
     }
   }


  render(){
    console.log(this.props, "EditPlant!!!!!!");
    return(
      <div className="edit-plant-modal">
          <h1>Edit Plant Card</h1>
          <h5>Nickname</h5>
          <input type="text" ref="nickname" onChange={this._handleTyping.bind(this, "nickname")} value={this.state.nickname}/><br/>
          <h5>Name</h5>
          <input type="text" ref="name" onChange={this._handleTyping.bind(this, "name")} value={this.state.name}/><br/>
          <h5>Description</h5>
          <input type="test" ref="description" onChange={this._handleTyping.bind(this, "description")} value={this.state.description}/><br/>
          <h5>Maxtemp</h5>
          <input type="test" ref="maxtemp" onChange={this._handleTyping.bind(this, "maxtemp")} value={this.state.maxtemp}/><br/>
          <h5>Mintemp</h5>
          <input type="test" ref="mintemp" onChange={this._handleTyping.bind(this, "mintemp")} value={this.state.mintemp}/><br/>
          <h5>Maxph</h5>
          <input type="test" ref="maxph" onChange={this._handleTyping.bind(this, "maxph")} value={this.state.maxph}/><br/>
          <h5>Minph</h5>
          <input type="test" ref="minph" onChange={this._handleTyping.bind(this, "minph")} value={this.state.minph}/><br/>
          <h5>Maxhum</h5>
          <input type="test" ref="maxhum" onChange={this._handleTyping.bind(this, "maxhum")} value={this.state.maxhum}/><br/>
          <h5>Minhum</h5>
          <input type="test" ref="minhum" onChange={this._handleTyping.bind(this, "minhum")} value={this.state.minhum}/><br/>
          <h5>Maxlux</h5>
          <input type="test" ref="maxlux" onChange={this._handleTyping.bind(this, "maxlux")} value={this.state.maxlux}/><br/>
          <h5>Minlux</h5>
          <input type="test" ref="minlux" onChange={this._handleTyping.bind(this, "minlux")} value={this.state.minlux}/><br/>
          <div className="create__card-button">
            <button onClick={this._submitCard}>Submit Plant</button>
          </div>
      </div>
    );
  }

}
