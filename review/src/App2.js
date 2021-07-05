import React from 'react';

const Person = () => {
  return (<div>
    <h1>Hello {this.state.name}.</h1>
    <h2>Hello {this.state.age}.</h2>
  </div>);
}


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
      <Person name={this.state.name} age={this.state.age} />
      <button onClick={this.handleClick}>Change the name</button>
    </div>);
  }
}

export default App2;