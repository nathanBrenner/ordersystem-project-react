import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation/Navigation';
import AppRouting from './Routing/Routing';

class App extends Component {
  render() {
    return (
      <AppRouting />
    )
  }
}

export default App;
