import React, { Component } from 'react';

import {
  BrowserRouter as Router,
	Route,
	Redirect
} from 'react-router-dom';

import Home from '../Home/Home';
import Customer from '../Customers/Customer';
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
						<Route
							path="/"
							exact={true}
							component={Home}
						/>
						<Route
							path="/customers"
							exact={true}
							component={Customers}
						/>
						<Route
							path="/customers/:id"
							component={Customer}
						/>
						<Route
							path="/orders"
							exact={true}
							component={Orders}
						/>
						<Route
							path="/products"
							exact={true}
							component={Products}
						/>
					</div>
				</div>
			</Router>
		)
	}
}

export default AppRouting