import React from 'react';

class Dope extends React.Component {
  render() {
    return (
      <div>
      This is a dope Component: {this.props.data}
      </div>
    );
  }
}

export default Dope;
