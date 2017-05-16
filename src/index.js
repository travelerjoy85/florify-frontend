import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './component/App';
import './index.css';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/plants/:id" component={Board} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
