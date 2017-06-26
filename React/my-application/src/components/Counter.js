import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };

    this.handleClick= this.handleClick.bind(this);
  }

handleClick() {
  this.setState({ value: this.state.value+=1});
}

  render() {
    return (
      <div>
      <div>
      { this.state.value }
      </div>
      <div>
      <button onClick={this.handleClick} >Click me!</button>
      </div>
      </div>
    );
  }
}

export default Counter;
