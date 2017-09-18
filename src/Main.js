import React, { Component } from 'react';

import Routes from './Routes';
import './MeyersReset.css';
import './Main.css';

class Main extends Component {
  render() { // console.log(`Main render`)
    return (
      <div className="Main">
        <div className="Main-header">
          <h2>TODO APP</h2>
        </div>

        <Routes />

      </div>
    );
  }
}

export default Main;
