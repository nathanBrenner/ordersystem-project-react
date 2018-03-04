import React, {Component} from 'react';
import Cell from './Cell';

class Row extends Component {
	render() {
		const column = this.props.columns[0].mapTo;
		const key = this.props.entity[column];
		return (
			<tr key={key}>
				{this.mapColumns(this.props.columns, this.props.entity)}
			</tr>
		)
	}

	renderCell(column, entity) {
		return <Cell column={column} entity={entity} />
	}

	mapColumns(columns, entity) {
		return columns.map(column => this.renderCell(column, entity));
	}
}

export default Row;