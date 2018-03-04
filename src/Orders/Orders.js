import React, {Component} from 'react';
import OrdersForm from './OrdersForm';
import OrdersTable from './OrdersTable';
import { get } from '../fetchUtils';

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
					<OrdersTable
						columns={this.state.columns}
						entities={this.state.entities}
					/>
				</div>
			</div>
		)
	}
}

export default Orders