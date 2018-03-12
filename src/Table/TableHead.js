import React from 'react';
import Column from './Column';
import { generateUUID } from '../fetchUtils';

const UniqueColumn = column => <Column key={generateUUID()} column={column} />;

const TableHead = ({ columns }) => (
  <thead>
    <tr>{columns.map(UniqueColumn)}</tr>
  </thead>
);

export default TableHead;
