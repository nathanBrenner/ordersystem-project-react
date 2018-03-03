import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './Navigation/Navigation';
import AppRouting from './Routing/Routing';

// class AppRouting extends Component {
// 	render() {
// 		return <div>Routing</div>
// 	}
// }

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AppRouting />
      </div>
    )
  }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App;
