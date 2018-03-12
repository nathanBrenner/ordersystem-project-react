import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Customer from '../Customers/Customer';
import Customers from '../Customers/Customers';
import Navigation from '../Navigation/Navigation';
import Orders from '../Orders/Orders';
import Order from '../Orders/Order';
import Products from '../Products/Products';
import Product from '../Products/Product';
import OrderCreate from '../Orders/OrderCreate';

const title = 'Awesome, Inc. Internal Ordering System';
const companyName = 'Awesome, Inc.';
const routes = [
  { title: 'Customers', path: '/customers' },
  { title: 'Products', path: '/products' },
  { title: 'Orders', path: '/orders' },
];

class AppRouting extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation title={companyName} routes={routes} />
          <div className="container">
            <Route
              path="/"
              exact={true}
              render={() => <Home title={title} />}
            />
            <Route path="/customers" exact={true} component={Customers} />
            <Route path="/customers/:id" exact={true} component={Customer} />
            <Route path="/orders" exact={true} component={Orders} />
            <Route path="/orders/:id" component={Order} />
            <Route path="/orders/create" component={OrderCreate} />
            <Route path="/products" exact={true} component={Products} />
            <Route path="/products/:id" exact={true} component={Product} />
          </div>
        </div>
      </Router>
    );
  }
}

export default AppRouting;
