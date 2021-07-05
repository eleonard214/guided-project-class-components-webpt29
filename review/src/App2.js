import React from 'react';

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Warren",
      age: 35
    }
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      name: "Allison",
      age: 12
    });
  }

  render() {
    return (<div>
      <h1>Hello {this.state.name}.</h1>
      <h2>Hello {this.state.age}.</h2>
      <button onClick={
        () => {

        }
      }>Change the name</button>
    </div>);
  }
}

export default App2;