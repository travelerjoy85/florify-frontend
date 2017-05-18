import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './component/App';
import './index.css';
import Home from './component/pages/Home';
import SignUp from './component/pages/SignUp';
import DetailedPlantPage from './component/pages/DetailedPlantPage';
import Login from './component/pages/Login';


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="plant/:id" component={DetailedPlantPage} />
      <Route path="signup" component={SignUp} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
