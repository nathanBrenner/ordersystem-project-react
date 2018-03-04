import React, {Component} from 'react';
import Column from './Column';
import { generateUUID } from '../fetchUtils'

class TableHead extends Component {
	render() {
		return (
			<thead>
				<tr>
					{this.props.columns.map(this.renderColumn)}
				</tr>
			</thead>
		)
	}

	renderColumn(column) {
		const key = generateUUID();

		return <Column key={key} column={column} />
	}
}

export default TableHead;