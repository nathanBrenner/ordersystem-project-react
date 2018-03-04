import React, {Component} from 'react';
import Row from './Row';
import { generateUUID } from '../fetchUtils'

class Rows extends Component {
	mapRows(entities, columns) {
		return entities && entities.length > 0
			? entities.map(entity => this.renderRow(entity, columns))
			: [].map(entity => this.renderRow(entity, columns));
	}

	renderRow(entity, columns) {
		const key = generateUUID();
		return (
			<Row 
				key={key}
				columns={columns}
				entity={entity}
			/>
		)
	}

	render() {
		return <tbody>{this.mapRows(this.props.entities, this.props.columns)}</tbody>
	}
}

export default Rows;