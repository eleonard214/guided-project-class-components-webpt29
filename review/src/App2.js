import React from 'react';

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren",
      age: 35
    }
  }

  render() {
    return (<h1>Hello {name}.</h1>);
  }
}

export default App2;