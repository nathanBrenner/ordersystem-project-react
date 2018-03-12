import React from 'react';
import OrdersForm from './OrdersForm';
import Table from '../Table/Table';

const Orders = ({ title, columns, entities }) => (
  <div className="row">
    <h1>{title}</h1>
    <div className="col-sm-12">
      <OrdersForm />
    </div>
    <div className="col-sm-12">
      <Table columns={columns} entities={entities} />
    </div>
  </div>
);

export default Orders;
