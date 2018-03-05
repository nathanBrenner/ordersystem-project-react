import React, {Component} from 'react';
import { get } from '../fetchUtils';
import { CustomerDetail } from './CustomerDetail';
import Table, { } from '../Table/Table';

class Customer extends Component {
	title = 'Customer Detail';
	columns = [
		{title: 'Order ID', mapTo: 'id', route: {parent: 'orders', param: 'id'}},
		{title: 'Order Date', mapTo: 'orderDate'},
		{title: 'Total Items', mapTo: 'totalItems'},
		{title: 'Total Sale', mapTo: 'totalSale'},
	]

	constructor(props) {
		super(props);
		this.state = {
			entity: {
				address1: '',
				address2: '',
				city: '',
				discount: {
					discountId: '',
					discountName: '',
					discountPercent: ''
				},
				firstName: '',
				getsDiscount: false,
				id: '',
				state: '',
				zip: ''
			},
			orders: []
		}
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		get(`customers/${id}`).then(entity => this.setState({entity}));
		get(`customers/${id}/orders`).then(orders => this.setState({orders}));
	}

  getFullAddress(customer) {
    var address2 = customer.address2 != null ? `${customer.address2}, ` : '';
    return `${customer.address1}, ${address2} ${customer.city}, ${customer.state} ${customer.zip}`;
  }

	render() {
		return (
			<div>
				<CustomerDetail
					title={this.title}
					name={this.state.entity.fullName}
					address={this.getFullAddress(this.state.entity)}
					getsDiscount={this.state.entity.getsDiscount ? 'Yes' : 'No'}
				/>
				<br/>

				{/* <discount *ngIf="customer.getsDiscount" 
					[customerDiscount]="customer.discount"
					(update)="updateDiscount($event)"
				></discount> */}

				<div className="row">
				{/* *ngIf="orders && orders.length > 0" */}
					<div className="col-md-12">
						<h3>Orders</h3>
						<Table
							entities={this.state.orders}
							columns={this.columns}
						/>
						{/* <table className="table">
							<thead>
								<tr>
									<th>Order ID</th>
									<th>Order Date</th>
									<th>Total Items</th>
									<th>Total Sale</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<a href="#">order.id</a>
									</td>
									<td>order.orderDate</td>
									<td>order.totalItems</td>
									<td>order.totalSale</td>
								</tr>
							</tbody>
						</table> */}
					</div>
				</div>
			</div>
		)
	}
}

export default Customer;