import React, {Component} from 'react';
import ProductsTable from './ProductsTable';

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

		fetch(`api/products`, {
			accept: "application/json"
		})
		.then(checkStatus)
		.then(parseJSON)
		.then(res => {
			this.setState({entities: res});
		})
		.catch(err => {
			alert('unable to get customers');
		});
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

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}