import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class ListWrap extends Component {
  constructor(props, context) { // console.log(`constructor`)
    super(props, context)

    this.state = {
      id: props.match.params.id,
      name: "list name",
      todoCount: 0
    }


    // called before the component is mounted
    // initialize state here
  }

  componentDidMount() { // console.log(`componentDidMount`)
    // invoked once (client-side only)
    // good for AJAX: fetch, ajax, or subscriptions
    // fires before first render()

    axios.get(`http://localhost:1337/list/${this.props.match.params.id}`, {
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
          name: res.data.name,
          todoCount: res.data.todo_count
        })
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    return (
      <List key={this.state.id} linked={false} name={this.state.name} todoCount={this.state.todoCount} listId={this.state.id} />
    );
  }
}

export default ListWrap;