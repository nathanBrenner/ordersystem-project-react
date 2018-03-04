import React, {Component} from 'react';
import TableHead from '../TableHead/TableHead';

class ProductsTable extends Component {

	renderRow(entity) {
		return (
			<tr key={entity.id}>
				<td>{entity.id}</td>
				<td>{entity.name}</td>
				<td>{entity.color}</td>
				<td>{entity.price}</td>
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

export default ProductsTable;