import React, {Component} from 'react';
import TableHead from '../TableHead/TableHead';

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

	render() {
		return (
			<table className="table">
				<TableHead columns={this.props.columns} />
				{this.renderRows(this.props.entities)}
			</table>
		)
	}
}

export default OrdersTable;