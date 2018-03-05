import React, {Component} from 'react';
import OrdersForm from './OrdersForm';
import Table from '../Table/Table';
import { get } from '../fetchUtils';

class Orders extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Orders',
			columns: [
				{title: 'Order Id', 			mapTo: 'id', route: {parent: 'orders', param: 'id'}},
				{title: 'Customer Name', 	mapTo: 'customerId'},
				{title: 'Total Items', 		mapTo: 'totalItems'},
				{title: 'Total Sale', 		mapTo: 'totalSale'}
			],
			entities: []
		}
	}

	componentDidMount() {
		get(`orders`).then(entities => this.setState({entities}));
	}

	render() {
		return (
			<div className="row">
    		<h1>{this.state.title}</h1>
				<div className="col-sm-12">
					<OrdersForm />
				</div>
				<div className="col-sm-12">
					<Table
						columns={this.state.columns}
						entities={this.state.entities}
					/>
				</div>
			</div>
		)
	}
}

export default Orders