import React from 'react';
import TableHead from './TableHead';
import Rows from './Rows';

const Table = ({ columns, entities }) => (
  <table className="table">
    <TableHead columns={columns} />
    <Rows entities={entities} columns={columns} />
  </table>
);

export default Table;
