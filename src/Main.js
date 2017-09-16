import React, { Component } from 'react';
import './Main.css';
import Lists from './Lists';

class Main extends Component {
  render() {
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
