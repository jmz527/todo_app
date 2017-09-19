import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './App';
import Topics from './Topics';
import Lists from './todo/Lists';
import ListWrap from './todo/ListWrap';
import TodoWrap from './todo/TodoWrap';

import './Routes.css';

const Routes = () => (
  <Router>
    <div>
      <ul className="links">
        <li><Link to="/">Lists</Link></li>
        <li><Link to="/App">App</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Lists}/>
      <Route path="/app" component={App}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/list/:id" component={ListWrap}/>
      <Route path="/todo/:id" component={TodoWrap}/>
    </div>
  </Router>
)
export default Routes