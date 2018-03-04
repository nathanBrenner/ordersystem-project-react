import React, {Component} from 'react';

class CustomersTable extends Component {

	renderRow(customer) {
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

	renderRows() {
		const {customers} = this.props
		const customerList = customers.map(this.renderRow);
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
					{this.renderRows()}
				</table>
			</div>
		)
	}
}

export default CustomersTable;