import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Home from './scenes/Home'
import ContainerComponent from './components/ReduxFun/ReduxFun.container.component';
import Header from './components/Header/index';

export const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <div className="container">
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
      </div>
    </div>
  </Router>
)

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

