import React, {Component} from 'react';
import OrdersForm from './OrdersForm';
import OrdersTable from './OrdersTable';

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Orders',
			columns: ['Order Id', 'Customer Name', 'Total Items', 'Total Sale'],
			entities: []
		}
	}

	componentDidMount() {
		fetch(`api/orders`, {
			accept: "application/json"
		})
		.then(checkStatus)
		.then(parseJSON)
		.then(res => {
			this.setState({entities: res});
		})
		.catch(err => {
			alert('unable to get orders');
		})
	}
	render() {
		return (
			<div className="row">
    		<h1>{this.state.title}</h1>
				<div className="col-sm-12">
					<OrdersForm />
				</div>
				<div className="col-sm-12">
					<OrdersTable
						columns={this.state.columns}
						entities={this.state.entities}
					/>
				</div>
			</div>
		)
	}
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

export default Orders