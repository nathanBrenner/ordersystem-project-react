import React, {Component} from 'react';

class Discount extends Component {
	discounts = [
		{
			discountId: 1,
			discountPercent: 10,
			discountName: "Employee"
		},
		{
			discountId: 2,
			discountPercent: 5,
			discountName: "Friends & Family"
		},
		{
			discountId: 3,
			discountPercent: 20,
			discountName: "Famous Drummer"
		}
	];

	constructor(props) {
		super(props);
		this.state = {
			selectedDiscount: '',
			editDiscount: false
		}

		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.editDiscountType = this.editDiscountType.bind(this);
		this.updateDiscountType = this.updateDiscountType.bind(this);
	}

	handleSelectChange(e) {
		const discount = this.discounts.filter(discount => discount.discountName === e.target.value);
		this.setState({selectedDiscount: discount[0]});
		e.preventDefault();
	}

	editDiscountType(e) {
		this.setState({editDiscount: true})
		e.preventDefault();
	}

	updateDiscountType(e) {
		e.preventDefault();
		this.props.update({discount: this.state.selectedDiscount});
	}

	render() {
		return (
			<div className="row">
				<div className="col-sm-8">
					<div className="form-group row">
						<label className="col-sm-3 col-form-label margin-top-6">Discount Type</label>
						{!this.state.editDiscount &&
							<div className="col-sm-3 margin-top-6">
								{this.props.discount.discountName}
							</div>
						}

						{this.state.editDiscount &&
							<div className="col-sm-4">
								<select className="form-control" 
									value={this.state.selectedDiscount}
									onChange={this.handleSelectChange}
								>
									{this.discounts.map(discount => (
										<option key={discount.discountId}>{discount.discountName}</option>
									))}
								</select>
							</div>
						}
						<div className="col-sm-2 end">
							{ !this.state.editDiscount &&
								<button className="btn btn-info"
									onClick={this.editDiscountType}
								>Edit</button>
							}

							{this.state.editDiscount &&
								<button className="btn btn-info"
									onClick={this.updateDiscountType}
								>Save</button>
							}
						</div>
					</div>
					<div className="form-group row">
						<div className="col-sm-3">
							<b>Discount Percent:</b>
						</div>
						<div className="col-sm-4 end">
								{this.props.discount.discountPercent}%
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Discount