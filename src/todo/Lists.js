import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import './Lists.css';

class Lists extends Component {
  constructor(props, context) { // console.log(`Main constructor`)
    super(props, context)

    this.state = { lists: [] }

    // called before the component is mounted
    // initialize state here
  }

  componentDidMount() { // console.log(`Main componentDidMount`)
    // invoked once (client-side only)
    // good for AJAX: fetch, ajax, or subscriptions
    // fires before first render()

    axios.get('http://localhost:1337/lists', {
        responseType:'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({ lists: res.data })
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
  	let listItems = this.state.lists.map((list) => {
  		return (<List key={list.id} linked={true} name={list.name} todoCount={list.todo_count} listId={list.id} />);
  	})

    return (
      <ul className="Lists">

    		{listItems}

      </ul>
    );
  }
}

export default Lists;
