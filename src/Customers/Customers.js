import React, {Component} from 'react';
import { get } from '../fetchUtils';
import Table from '../Table/Table';

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Customers',
			entities: [],
			columns: [
				{title: 'Full Name', 			mapTo: 'fullName'},
				{title: 'Address Line 1', mapTo: 'address1'},
				{title: 'Address Line 2', mapTo: 'address2'},
				{title: 'City', 					mapTo: 'city'},
				{title: 'State', 					mapTo: 'state'},
				{title: 'Zip', 						mapTo: 'zip'},
				{title: 'Discount?', 			mapTo: 'getDiscount'},
			]
		}
	}

	componentDidMount() {
		get('customers').then(entities => this.setState({entities}));
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h1>{this.state.title}</h1>
					<Table
						columns={this.state.columns}
						entities={this.state.entities}
					/>
				</div>
			</div>
		)
	}
}

export default Customers;