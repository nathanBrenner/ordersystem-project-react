import React, {Component} from 'react';
import { get } from '../fetchUtils';

class Product extends Component {
	title = 'Product Detail';

	constructor(props) {
		super(props);
		this.state = {
			entity: {
				name: '',
				color: '',
				price: ''
			}
		}
	}
	componentDidMount() {
		const {id} = this.props.match.params;
		get(`products/${id}`)
			.then(entity => this.setState({entity}));
	}

	render() {
		return (
			<div>
				<div className="row">
					<h1>{this.title}: {this.state.entity.name}</h1>
				</div>
				<div className="row">
					<div className="col-md-3">
						<b>Color:</b>
					</div>
					<div className="col-md-4 end">
						{this.state.entity.color}
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<b>Price:</b>
					</div>
					<div className="col-md-4 end">
						{this.state.entity.price}
					</div>
				</div>
			</div>
		)
	}
}

export default Product;