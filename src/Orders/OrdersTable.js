import React, {Component} from 'react';

class OrdersTable extends Component {
	renderRow(entity) {
		return (
			<tr key={entity.id}>
				<td>{entity.id}</td>
				<td>{entity.customerId}</td>
				<td>{entity.totalItems}</td>
				<td>{entity.totalSale}</td>
			</tr>
		)
	}

	renderRows() {
		const {entities} = this.props;
		const emptyRows = [{id: '0', customerName: '0 customers', totalItems: 0, totalSale: 0}];
		const rows = entities && entities.length > 0 ? entities.map(this.renderRow) : emptyRows.map(this.renderRow)
		return <tbody>{rows}</tbody>
	}

	renderTableHead() {
		return (
			<thead>
				<tr>
					<th>Order Id</th>
					<th>Customer Name</th>
					<th>Total Items</th>
					<th>Total Sale </th>
				</tr>
			</thead>
		)
	}


	render() {
		return (
			<table className="table">
				{this.renderTableHead()}
				{this.renderRows()}
			</table>
		)
	}
}

export default OrdersTable;