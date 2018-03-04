import React, {Component} from 'react';
import Column from './Column';

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
		return <Column column={column} />
	}
}

export default TableHead;