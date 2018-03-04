import React, {Component} from 'react';

class Cell extends Component {
	render() {
		const {entity, column} = this.props;
		return (
			<td key={entity[column.mapTo]}>
				{entity[column.mapTo]}
			</td>
		)
	}
}

export default Cell;