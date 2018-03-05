import React, {Component} from 'react';
import TableHead from './TableHead';
import Rows from './Rows';

class Table extends Component {
	render() {
		// const link = this.props.entities && this.props.entities[0]
		// 	? `/customers/${this.props.entities[0].id}`
		// 	: '/customers';
		return (
			<table className="table">
				<TableHead columns={this.props.columns} />
				<Rows
					entities={this.props.entities}
					columns={this.props.columns}
				/>
			</table>
		)
	}
}

export default Table;