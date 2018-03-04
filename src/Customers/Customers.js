import React, {Component} from 'react';
import CustomersTable from './CustomersTable';


// tech debt: https://github.com/fullstackreact/food-lookup-demo/blob/master/client/src/Client.js
// use something like that as an abstract service

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Customers',
			customers: [],
			columns: [
				'Full Name',
				'Address Line 1',
				'Address Line 2',
				'City',
				'State',
				'Zip',
				'Discount?',
			]
		}
	}

	componentDidMount() {

		fetch(`api/customers`, {
			accept: "application/json"
		})
		.then(checkStatus)
		.then(parseJSON)
		.then(res => {
			this.setState({customers: res});
		})
		.catch(err => {
			alert('unable to get customers');
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h1>{this.state.title}</h1>
					<CustomersTable
						entities={this.state.customers}
						columns={this.state.columns}
					/>
				</div>
			</div>
		)
	}
}

export default Customers;