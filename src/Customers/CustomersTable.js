import React, {Component} from 'react';
import TableHead from '../TableHead/TableHead';

class CustomersTable extends Component {

	renderRow(entity) {
		return (
			<tr key={entity.fullName}>
				<td>{entity.fullName}</td>
				<td>{entity.address1}</td>
				<td>{entity.address2}</td>
				<td>{entity.city}</td>
				<td>{entity.state}</td>
				<td>{entity.zip}</td>
				<td>{entity.getsDiscount ? 'Yes':'No'}</td>
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
			<div>
				<table className="table">
					<TableHead columns={this.props.columns} />
					{this.renderRows(this.props.entities)}
				</table>
			</div>
		)
	}
}

export default CustomersTable;