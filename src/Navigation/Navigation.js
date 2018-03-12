import React from 'react';
import { Link } from 'react-router-dom';

const Route = ({ route }) => (
  <li>
    <Link to={route.path}>{route.title}</Link>
  </li>
);

const Routes = ({ routes }) => (
  <ul className="nav navbar-nav">
    {routes.map(route => <Route key={route.title} route={route} />)}
  </ul>
);

const Navigation = ({ title, routes }) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          {title}
        </Link>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <Routes routes={routes} />
      </div>
    </div>
  </nav>
);

export default Navigation;
