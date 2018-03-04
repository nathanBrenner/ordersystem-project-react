import React, {Component} from 'react';

class CustomersTable extends Component {
	render() {
		return (
			<div>
				Customer table {this.props.customser.length}
			</div>
		)
	}
}

export default CustomersTable;