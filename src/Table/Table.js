import React, {Component} from 'react';
import TableHead from './TableHead';
import Rows from './Rows';

class Table extends Component {
	render() {
		return (
			<div>
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