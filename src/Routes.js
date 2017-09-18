import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Lists from './todo/Lists';
import ListWrap from './todo/ListWrap';
import TodoWrap from './todo/TodoWrap';
// import Todos from './todo/Todos';
// import Todo from './todo/Todo';
import './Routes.css';

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Routes = () => (
  <Router>
    <div>
      <ul className="links">
        <li><Link to="/">Lists</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Lists}/>
      <Route path="/list/:id" component={ListWrap}/>
      <Route path="/todo/:id" component={TodoWrap}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default Routes