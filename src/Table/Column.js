import React, {Component} from 'react';

class Column extends Component {
	render() {
		const {column} = this.props;
		return <th key={column.mapTo}>{column.title}</th>
	}
}

export default Column;