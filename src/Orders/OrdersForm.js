import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const OrdersForm = () => (
  <form className="form-inline">
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-search" />
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Filter Orders"
        />
      </div>
    </div>
    <Link to="/orders/create" className="btn btn-info">
      Create Order
    </Link>
  </form>
);

export default OrdersForm;
