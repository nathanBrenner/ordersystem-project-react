import React from 'react';
import { CustomerTitle } from './CustomerTitle';
import { CustomerAddress } from './CustomerAddress';
import { CustomerDiscount } from './CustomerDiscount';

export const CustomerDetail = ({ title, name, address, getsDiscount }) => (
  <div>
    <CustomerTitle title={title} name={name} />
    <CustomerAddress address={address} />
    <CustomerDiscount getsDiscount={getsDiscount} />
  </div>
);
