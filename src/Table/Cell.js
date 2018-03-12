import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CellWithLink = ({ entity, column }) => {
  const param = column.route.param;
  const route = `${column.route.parent}/${entity[param]}`;
  return (
    <td key={entity[column.mapTo]}>
      <Link to={route}>{entity[column.mapTo]}</Link>
    </td>
  );
};

function CellWithoutLink({ entity, column }) {
  return <td key={entity[column.mapTo]}>{entity[column.mapTo]}</td>;
}

const Route = ({ entity, column }) => {
  return column.route ? (
    <CellWithLink entity={entity} column={column} />
  ) : (
    <CellWithoutLink entity={entity} column={column} />
  );
};

const Cell = ({ entity, column }) => <Route entity={entity} column={column} />;

export default Cell;
