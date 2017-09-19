import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import './Lists.css';

class Lists extends Component {
  constructor(props, context) { // console.log(`Main constructor`)
    super(props, context)

    // called before the component is mounted
    // initialize state here

    this.state = {
      lists: [],
      newListName: "",
      newListMode: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleChange(e) {
    this.setState({newListName: e.target.value});
  }

  handleSubmit(e) {
    // console.log('A name was submitted: ' + this.state.newListName);

    axios.post('http://localhost:1337/list', {
        responseType:'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        text: this.state.newListName
      })
      .then((res) => {

        let newList = {
          id: res.data.id,
          name: res.data.name,
          todo_count: res.data.todo_count
        }

        this.setState({
          lists: [...this.state.lists, newList],
          newListName: "",
          newListMode: false
        });

      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  }

  handleDelete(e, listId, idx) {
    // console.log('A list was deleted: ' + listId);
    // console.log(idx);

    axios.post(`http://localhost:1337/delete_list/${listId}`, {
        responseType:'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((res) => {

        this.setState({ lists: [].concat(this.state.lists.slice(0, idx), this.state.lists.slice(idx + 1)) });

      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  }

  render() {
    var listItems, newListComp;
        listItems = this.state.lists.map((list, idx) => {
          return (<List key={list.id} index={idx} linked={true} name={list.name} todoCount={list.todo_count} listId={list.id} handleDelete={this.handleDelete} />);
        })

    if (!this.state.newListMode) {
      newListComp = (<button onClick={() => this.setState({ newListMode: true })}>+</button>);
    } else {
      newListComp = (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.newListName} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }

    return (
      <ul className="Lists">

    		{listItems}

        {newListComp}

      </ul>
    );
  }
}




export default Lists;