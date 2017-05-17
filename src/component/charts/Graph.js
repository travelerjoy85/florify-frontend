import React, { Component } from 'react';

class Graph extends Component {
  constructor () {
    super()
    this.state={}
  }

	componentWillMount(){
		this.setState(initialState);
	}

	componentDidMount(){

		var _this = this;

		setInterval(function(){
			var oldDataSet = _this.state.datasets[0];
			var newData = [];

			for(var x=0; x< _this.state.labels.length; x++){
				newData.push(Math.floor(Math.random() * 100));
			}

			var newDataSet = {
				...oldDataSet
			};

			newDataSet.data = newData;

			var newState = {
				...initialState,
				datasets: [newDataSet]
			};

			_this.setState(newState);
		}, 5000);
	};

  render() {
    return (
      <div>
        <h2>Random Animated Line Example</h2>
 		     <Graph />
      </div>
    );
  }
}

export default App;
