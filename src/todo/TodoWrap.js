import React, { Component } from 'react';
import axios from 'axios';
import Todo from './Todo';

class TodoWrap extends Component {
  constructor(props, context) { // console.log(`constructor`)
    super(props, context)

    this.state = {
      id: props.match.params.id,
      text: "todo text",
      list_ref: "ref id"
    }


    // called before the component is mounted
    // initialize state here
  }

  componentDidMount() { // console.log(`componentDidMount`)
    // invoked once (client-side only)
    // good for AJAX: fetch, ajax, or subscriptions
    // fires before first render()

    axios.get(`http://localhost:1337/todo/${this.props.match.params.id}`, {
        responseType:'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {
        // console.log(res.data);
        this.setState({
          id: res.data.id,
          text: res.data.text,
          list_ref: res.data.list_ref
        })
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    return (
      <Todo key={this.state.id} linked={false} text={this.state.text} ref={this.state.list_ref} todoId={this.state.id} />
    );
  }
}

export default TodoWrap;