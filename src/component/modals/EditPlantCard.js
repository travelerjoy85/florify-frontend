import React, {Component} from 'react';
import './EditPlantCard.css';
import api from '../../api';

const ENTER = 13;

export default class EditPlantCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _submitPlantCardUpdate = () => {
    let{
      nickname: {value: nickname},
      name: {value: name},
      description: {value: description},
      maxtemp: {value: maxtemp},
      mintemp: {value: mintemp},
      maxph: {value: maxph},
      minph: {value: minph},
      maxhum: {value: maxhum},
      minhum: {value: minhum},
      maxlux: {value: maxlux},
      minLux: {value: minLux}
    } = this.refs;
    if(nickname){
      api.postPlantCard({
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
      }).then(() => {
        this.props._handleCardCreate();
        this.props._fetchCards();
      }).catch(conso.elerror)
    }
  }

  _handleTyping = (e) => {
  if(this.state && this.state.error){
    this.setState({error: null})
  }
  if(e.keyCode === ENTER){
    this._submitCard()
  }
}

render(){
  return(
    <div className="create__card">
      <div className="create__card-content">
        <h1>Edit Plant Card</h1>
        <h5>Nickname</h5>
        <input type="text" ref="nickname" onKeyUp={this._handleTyping}/><br/>
        <h5>Name</h5>
        <input type="text" ref="name" onKeyUp={this._handleTyping}/><br/>
        <h5>description</h5>
        <input type="test" ref="description" onKeyUp={this._handleTyping}/><br/>
        <h5>Maxtemp</h5>
        <input type="text" ref="maxtemp" onKeyUp={this._handleTyping}/><br/>
        <h5>Mintemp</h5>
        <input type="text" ref="mintemp" onKeyUp={this._handleTyping}/><br/>
        <h5>Maxph</h5>
        <input type="text" ref="maxph" onKeyUp={this._handleTyping}/><br/>
        <h5>Minph</h5>
        <input type="text" ref="minph" onKeyUp={this._handleTyping}/><br/>
        <h5>Maxhum</h5>
        <input type="text" ref="maxhum" onKeyUp={this._handleTyping}/><br/>
        <h5>Minhum</h5>
        <input type="text" ref="minhum" onKeyUp={this._handleTyping}/><br/>
        <h5>Maxlux</h5>
        <input type="text" ref="maxlux" onKeyUp={this._handleTyping}/><br/>
        <h5>Minlux</h5>
        <input type="text" ref="minlux" onKeyUp={this._handleTyping}/><br/>
      <div className="create__board-button">
        <button onClick=<EditPlantCard/>>Submit Changes</button>
      </div>
      </div>
    </div>
  );
}
}
