import React, {Component} from 'react';
import ProductsTable from './ProductsTable';
import { get } from '../fetchUtils';

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Products',
			entities: [],
			columns: [
				'Product Id',
				'Name',
				'Color',
				'Price',
			]
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
					<ProductsTable
						columns={this.state.columns}
						entities={this.state.entities}
					/>
				</div>
			</div>
		)
	}
}

export default Products;