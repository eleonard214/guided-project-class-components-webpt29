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
    return (<div>
      <h1>Hello {this.state.name}.</h1>
      <h2>Hello {this.state.age}.</h2>
      <button onClick={
        () => {
          this.setState({
            ...this.state,
            name: "Allison",
            age: 12
          });
        }
      }>Change the name</button>
    </div>);
  }
}

export default App2;