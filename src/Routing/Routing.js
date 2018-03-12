import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home/Home';
import Customer from '../Customers/Customer';
import Navigation from '../Navigation/Navigation';
import Orders from '../Orders/Orders';
import Order from '../Orders/Order';
import Product from '../Products/Product';
import OrderCreate from '../Orders/OrderCreate';
import { get } from '../fetchUtils';
import EntityTable from '../Table/EntityTable';

const title = 'Awesome, Inc. Internal Ordering System';
const companyName = 'Awesome, Inc.';
const routes = [
  { title: 'Customers', path: '/customers' },
  { title: 'Products', path: '/products' },
  { title: 'Orders', path: '/orders' },
];

const columns = {
  customers: [
    {
      title: 'Full Name',
      mapTo: 'fullName',
      route: { parent: 'customers', param: 'id' },
    },
    { title: 'Address Line 1', mapTo: 'address1' },
    { title: 'Address Line 2', mapTo: 'address2' },
    { title: 'City', mapTo: 'city' },
    { title: 'State', mapTo: 'state' },
    { title: 'Zip', mapTo: 'zip' },
    { title: 'Discount?', mapTo: 'getDiscount' },
  ],
  orders: [
    {
      title: 'Order Id',
      mapTo: 'id',
      route: { parent: 'orders', param: 'id' },
    },
    { title: 'Customer Name', mapTo: 'customerId' },
    { title: 'Total Items', mapTo: 'totalItems' },
    { title: 'Total Sale', mapTo: 'totalSale' },
  ],
  products: [
    {
      title: 'Product Id',
      mapTo: 'id',
      route: { parent: 'products', param: 'id' },
    },
    { title: 'Name', mapTo: 'name' },
    { title: 'Color', mapTo: 'color' },
    { title: 'Price', mapTo: 'price' },
  ],
};

const titles = {
  customers: 'Customers',
  orders: 'Orders',
  products: 'Products',
};

class AppRouting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      orders: [],
      products: [],
    };
  }

  componentDidMount() {
    get('customers').then(customers => this.setState({ customers }));
    get(`orders`).then(orders => this.setState({ orders }));
    get('products').then(products => this.setState({ products }));
  }

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
            <Route
              path="/customers"
              exact={true}
              render={() => (
                <EntityTable
                  columns={columns.customers}
                  title={titles.customers}
                  entities={this.state.customers}
                />
              )}
            />
            <Route path="/customers/:id" exact={true} component={Customer} />
            <Route
              path="/orders"
              exact={true}
              render={() => (
                <Orders
                  columns={columns.orders}
                  title={titles.orders}
                  entities={this.state.orders}
                />
              )}
            />
            <Route path="/orders/:id" component={Order} />
            <Route path="/orders/create" component={OrderCreate} />
            <Route
              path="/products"
              exact={true}
              render={() => (
                <EntityTable
                  columns={columns.products}
                  title={titles.products}
                  entities={this.state.products}
                />
              )}
            />
            <Route path="/products/:id" exact={true} component={Product} />
          </div>
        </div>
      </Router>
    );
  }
}

export default AppRouting;
