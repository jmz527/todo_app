import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="List-header">
          <h2>LIST</h2>
        </div>
        <p className="List-intro">List stuff here</p>
      </div>
    );
  }
}

export default List;
