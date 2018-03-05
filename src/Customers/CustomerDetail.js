import React from 'react';
import { CustomerTitle } from './CustomerTitle';
import { CustomerAddress } from './CustomerAddress';
import { CustomerDiscount } from './CustomerDiscount';

export function CustomerDetail(props) {
	return (
		<div>
			<CustomerTitle title={props.title} name={props.name} />
			<CustomerAddress address={props.address} />
			<CustomerDiscount getsDiscount={props.getsDiscount} />
		</div>
	)
}