import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Cell extends Component {
	render() {
		const {entity, column} = this.props;
		return this.checkRoute(entity, column);
	}

	checkRoute(entity, column) {
		return column.route ? this.cellWithLink(entity, column) : this.cellWithoutLink(entity, column);
	}

	cellWithLink(entity, column) {
		const param = column.route.param;
		const route = `${column.route.parent}/${entity[param]}`;
		return (
			<td key={entity[column.mapTo]}>
				<Link to={route}>{entity[column.mapTo]}</Link>
			</td>
		)		
	}

	cellWithoutLink(entity, column) {
		return (
			<td key={entity[column.mapTo]}>
				{entity[column.mapTo]}
			</td>
		)
	}
}

export default Cell;