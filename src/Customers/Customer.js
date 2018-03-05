import React, {Component} from 'react';
import { get } from '../fetchUtils';
import { CustomerDetail } from './CustomerDetail';
import Table from '../Table/Table';
import Discount from './Discount';
import * as moment from 'moment';

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

		this.handleDiscountUpdate = this.handleDiscountUpdate.bind(this);
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		get(`customers/${id}`).then(entity => this.setState({entity}));
		get(`customers/${id}/orders`)
			.then(this.formatDate)
			.then(orders => this.setState({orders}));
	}

  getFullAddress(customer) {
    var address2 = customer.address2 != null ? `${customer.address2}, ` : '';
    return `${customer.address1}, ${address2} ${customer.city}, ${customer.state} ${customer.zip}`;
	}
	
	handleDiscountUpdate(e) {
		// tech debt: add an api request to update the customer
		const entity = {...this.state.entity, discount: e.discount};
		this.setState({entity});
	}

	formatDate(orders) {
		return orders.map(order => ({
			...order,
			orderDate: moment(order.orderDate).format("MM/DD/YYYY")
		}))
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

				{this.state.entity.getsDiscount &&
					<Discount
						discount={this.state.entity.discount}
						update={this.handleDiscountUpdate}
					/>
				}


				<div className="row">

				{this.state.orders.length > 0 &&
					<div className="col-md-12">
						<h3>Orders</h3>
						<Table
							entities={this.state.orders}
							columns={this.columns}
						/>
					</div>
				}
				</div>
			</div>
		)
	}
}

export default Customer;