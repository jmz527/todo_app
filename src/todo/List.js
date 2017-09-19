import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Todos from './Todos';
import './List.css';

class List extends Component {
  render() {

    var title;

    if (this.props.linked) {
      title = (<h2><Link to={`/list/${this.props.listId}`}>{this.props.name.toUpperCase()} | {this.props.todoCount}</Link></h2>)
    } else {
      title = (<h2>{this.props.name.toUpperCase()} | {this.props.todoCount}</h2>)
    }

    return (
      <li className="List">

        {title}

        <button onClick={(e) => this.props.handleDelete(e, this.props.listId, this.props.index)}>delete</button>

        <Todos listId={this.props.listId} />

      </li>
    );
  }
}

export default List;