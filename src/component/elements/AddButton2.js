import React from 'react';
import './AddButton.css';


export default (props) => {

    return (
      <div className="add-button" onClick={props._handlePlantCardCreate}>
        <button type="button">Add Plant</button>
      </div>
    );

}
