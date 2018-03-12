import React from 'react';
import Cell from './Cell';
import { generateUUID } from '../fetchUtils';

const UniqueCell = ({ column, entity }) => (
  <Cell key={generateUUID()} column={column} entity={entity} />
);

const Columns = ({ columns, entity }) =>
  columns.map(column => (
    <UniqueCell key={generateUUID()} column={column} entity={entity} />
  ));

const Row = ({ columns, entity }) => (
  <tr>
    <Columns columns={columns} entity={entity} />
  </tr>
);

export default Row;
