import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../Home/Home';

class AppRouting extends Component {
	render() {
		return (
			<Router>
				<Route path="/" component={Home}/>
			</Router>
		)
	}
}

export default AppRouting