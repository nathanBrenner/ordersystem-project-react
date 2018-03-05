import React, {Component} from 'react';
import TableHead from './TableHead';
import Rows from './Rows';
import { Link } from 'react-router-dom';

class Table extends Component {
	render() {
		const link = this.props.entities && this.props.entities[0]
			? `/customers/${this.props.entities[0].id}`
			: '/customers';
		return (
			<div>
				<Link to={link}>Customer</Link>
				<table className="table">
					<TableHead columns={this.props.columns} />
					<Rows
						entities={this.props.entities}
						columns={this.props.columns}
					/>
				</table>
			</div>
		)
	}
}

export default Table;