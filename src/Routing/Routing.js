import React, { Component } from 'react';

import {
  BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';

import Home from '../Home/Home';
import Customers from '../Customers/Customers';
import Navigation from '../Navigation/Navigation';
import Orders from '../Orders/Orders';
import Products from '../Products/Products';

class AppRouting extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<div className="container">
						<Redirect from="/" to="home" />
						<Route path="/home" component={Home} />
						<Route path="/customers" component={Customers} />
						<Route path="/orders" component={Orders} />
						<Route path="/products" component={Products} />
					</div>
				</div>
			</Router>
		)
	}
}

export default AppRouting