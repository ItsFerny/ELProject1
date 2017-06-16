import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Todo extends Component {
  constructor() {
    super();
    this.state = {
      checked: null,
    }
  }
render() {
  return (
    <div>
    <input type="checkbox" checked={this.state.checked} onChange/>
    {this.props.text}
    {this.props.checked ? 'it is checked' : 'it is not checked'}
    </div>
  );
}
}

export class App extends Component {
  render() {
      return (
    <div>
    <Todo text="this is very hard" />
    </div>
  );
}
}
export default App;
