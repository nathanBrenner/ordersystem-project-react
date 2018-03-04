import React, {Component} from 'react';
import { get } from '../fetchUtils';
import Table from '../Table/Table';

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Products',
			entities: [],
			columns: [
				{title: 'Product Id', mapTo: 'id'},
				{title: 'Name', 			mapTo: 'name'},
				{title: 'Color', 			mapTo: 'color'},
				{title: 'Price', 			mapTo: 'price'},
			],
		}
	}

	componentDidMount() {
		get('products').then(entities => this.setState({entities}));
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<h1>{this.state.title}</h1>
				</div>
				<div className="col-sm-12">
					<Table
						columns={this.state.columns}
						entities={this.state.entities}
					/>
				</div>
			</div>
		)
	}
}

export default Products;