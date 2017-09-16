import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';
import './Todos.css';

class Todos extends Component {
  constructor(props, context) { // console.log(`Main constructor`)
    super(props, context)

    this.state = { todos: [] }

    // called before the component is mounted
    // initialize state here
  }

  componentDidMount() { // console.log(`Main componentDidMount`)
    // invoked once (client-side only)
    // good for AJAX: fetch, ajax, or subscriptions
    // fires before first render()

    axios.get('http://localhost:1337/list/'+this.props.listId+'/todos', {
        responseType:'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({ todos: res.data })
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    let todoList = this.state.todos.map((todo) => {
      return (<Todo key={todo.id} text={todo.text} ref={todo.list_ref} todoId={todo.id} />)
    })

    return (
      <ul className="Todos">
        {todoList}
      </ul>
    );
  }
}

export default Todos;
