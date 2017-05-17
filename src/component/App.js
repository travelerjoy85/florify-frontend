import React, { Component } from 'react';
import './App.css';
import Menu from './modals/Menu';
//import auth from '';
//import util from '';
import auth from '../auth';
import util from '../util';
import api from '../api';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      title: 'Dashboardly'

    }
  }

  closeMenu = () => this.setState({ isMenuOpen: false })
  closeMenuAndLogout = () =>
  {
    this.closeMenu()
    this._handleLogout()
  }

  // _handleLogout = () => {
  //   auth.logout()
  //  .then(res => this.props..push('/'));
  //  }

  // componentDidUpdate(){
  //   let newTitle = util.getTitle()
  //   if (newTitle != this.state.title){
  //     this.setState({title: newTitle})
  //   }
  // }

  render() {
    let {isMenuOpen} = this.state;
    return (
      <div className="App">
        {this.props.children}
        <Menu show={isMenuOpen} closeMenu={this.closeMenu} closeMenuAndLogout={this.closeMenuAndLogout}/>
      </div>
    );
  }
}

export default App;
