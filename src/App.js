import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Home from './scenes/Home'
import ContainerComponent from './components/ReduxFun/ReduxFun.container.component';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <ContainerComponent />
      </div>
    );
  }
}

export default App;
