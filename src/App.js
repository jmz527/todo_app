import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) { console.log(`constructor`)
    super(props, context)

    // called before the component is mounted
    // initialize state here
  }

  componentWillMount() { console.log(`componentWillMount`)
    // invoked once
    // fires before first render() (no DOM yet)
  }

  componentDidMount() { console.log(`componentDidMount`)
    // invoked once (client-side only)
    // good for AJAX: fetch, ajax, or subscriptions
    // fires before first render()
  }

  componentWillReceiveProps(nextProps, nextContext) { console.log(`componentWillReceiveProps`)
    // invoked every time component receives new props
    // does not fire before first render()
    // use setState() here
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) { console.log(`shouldComponentUpdate`)
    // skips render() if returns false
    // invoked before every update (new props or state)
    // does not fire before first render()
  }

  componentWillUpdate(nextProps, nextState, nextContext) { console.log(`componentWillUpdate`)
    // invoked immediately before update (new props or state)
    // does not fire before first render()
    // can't use setState() here
  }

  componentDidUpdate(prevProps, prevState, prevContext) { console.log(`componentDidUpdate`)
    // invoked immediately after DOM updates
    // does not fire after first render()
  }

  componentWillUnmount() { console.log(`componentWillUnmount`)
    // invoked before DOM removal
  }


  render() { console.log(`render`)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
