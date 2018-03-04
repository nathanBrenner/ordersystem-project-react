import React, {Component} from 'react';
import Cell from './Cell';
import { generateUUID } from '../fetchUtils'

class Row extends Component {
	render() {
		const key = generateUUID();
		return (
			<tr key={key}>
				{this.mapColumns(this.props.columns, this.props.entity)}
			</tr>
		)
	}

	renderCell(column, entity) {
		const key = generateUUID();
		return (
			<Cell
				key={key}
				column={column}
				entity={entity}
			/>
		)
	}

	mapColumns(columns, entity) {
		return columns.map(column => this.renderCell(column, entity));
	}
}

export default Row;