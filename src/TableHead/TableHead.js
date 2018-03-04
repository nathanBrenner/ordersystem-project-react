import React, {Component} from 'react';

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
		return <th>{column}</th>
	}
}

export default TableHead;