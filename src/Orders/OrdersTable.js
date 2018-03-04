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

	renderRows(entities) {
		return <tbody>{this.mapRows(entities)}</tbody>
	}

	mapRows(entities) {
		return entities && entities.length > 0
			? entities.map(this.renderRow)
			: [].map(this.renderRow);
	}

	renderTableHead(columns) {
		return (
			<thead>
				<tr>
					{columns.map(this.renderColumn)}
				</tr>
			</thead>
		)
	}

	renderColumn(column) {
		return <th>{column}</th>
	}


	render() {
		return (
			<table className="table">
				{this.renderTableHead(this.props.columns)}
				{this.renderRows(this.props.entities)}
			</table>
		)
	}
}

export default OrdersTable;