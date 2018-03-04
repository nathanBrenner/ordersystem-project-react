import React, {Component} from 'react';

class CustomersTable extends Component {

	renderCustomer(customer) {
		return (
			<tr key={customer.fullName}>
				<td>{customer.fullName}</td>
				<td>{customer.address1}</td>
				<td>{customer.address2}</td>
				<td>{customer.city}</td>
				<td>{customer.state}</td>
				<td>{customer.zip}</td>
				<td>{customer.getsDiscount ? 'Yes':'No'}</td>
			</tr>
		)
	}

	renderCustomers() {
		const {customers} = this.props
		const customerList = customers.map(this.renderCustomer);
		return <tbody>{customerList}</tbody>
	}

	renderTableHead() {
		return (
			<thead>
				<tr>
						<th>Full Name</th>
						<th>Address Line 1</th>
						<th>Address Line 2</th>
						<th>City</th>
						<th>State</th>
						<th>Zip</th>
						<th>Discount?</th>
				</tr>
			</thead>
		)
	}

	render() {
		return (
			<div>
				<table className="table">
					{this.renderTableHead()}
					{this.renderCustomers()}
				</table>
			</div>
		)
	}
}

export default CustomersTable;