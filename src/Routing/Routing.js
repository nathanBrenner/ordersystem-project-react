import React, { Component } from 'react';

import {
  BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import Home from '../Home/Home';
import Customer from '../Customers/Customer';
import Customers from '../Customers/Customers';
import Navigation from '../Navigation/Navigation';
import Orders from '../Orders/Orders';
import Order from '../Orders/Order';
import Products from '../Products/Products';
import Product from '../Products/Product';
import OrderCreate from '../Orders/OrderCreate';

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
							exact={true}
							component={Customer}
						/>
						<Route
							path="/orders"
							exact={true}
							component={Orders}
						/>
						<Route
							path="/orders/:id"
							component={Order}
						/>
						<Route
							path="/orders/create"
							component={OrderCreate}
						/>
						<Route
							path="/products"
							exact={true}
							component={Products}
						/>
						<Route
							path="/products/:id"
							exact={true}
							component={Product}
						/>
					</div>
				</div>
			</Router>
		)
	}
}

export default AppRouting