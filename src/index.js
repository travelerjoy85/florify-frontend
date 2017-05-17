import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './component/App';
import './index.css';
import Home from './component/pages/Home';
import SignUp from './component/pages/SignUp';
import PlantCards from './component/pages/PlantCards';
import Login from './component/pages/Login';
import Logout from './component/pages/Logout';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/plants/:id" component={PlantCards} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
