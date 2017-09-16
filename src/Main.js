import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import Lists from './todo/Lists';

class Main extends Component {
  constructor(props, context) { console.log(`Main constructor`)
    super(props, context)

    this.state = { lists: [] }

    // called before the component is mounted
    // initialize state here
  }

  componentDidMount() { console.log(`Main componentDidMount`)
    // invoked once (client-side only)
    // good for AJAX: fetch, ajax, or subscriptions
    // fires before first render()

    // axios.get('http://localhost:1337/lists', {
    //     responseType:'json',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     }
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });


  }

  render() { console.log(`Main render`)
    return (
      <div className="Main">
        <div className="Main-header">
          <h2>TODO</h2>
        </div>

        <Lists />

      </div>
    );
  }
}

export default Main;
