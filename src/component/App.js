import React, { Component } from 'react';
import Menu from './modals/Menu';
import './App.css';

// TODO: Import menu back and render it...
// import Menu from './modals/Menu';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false
    }
  }

  closeMenu = () => this.setState({ isMenuOpen: false })
  // closeMenuAndLogout = () => {
  //   this.closeMenu()
  //   this._handleLogout()
  // }

  render() {
    let {isMenuOpen} = this.state;
    return (
      <div className="App">
        {/* TODO: Render the menu here... */}
        <Menu show={isMenuOpen}
          closeMenu={this.closeMenu}
          router={this.props.router}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
