import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <div>HOME</div>

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