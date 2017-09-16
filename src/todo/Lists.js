import React, { Component } from 'react';
import List from './List';
import './Lists.css';

class Lists extends Component {
  render() {
  	let listItems = this.props.lists.map((list) => {
  		return (<List key={list.id} name={list.name} todoCount={list.todo_count} listId={list.id} />);
  	})

    return (
      <ul className="Lists">

    		{listItems}

      </ul>
    );
  }
}

export default Lists;
