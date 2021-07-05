import React from 'react';

// const Person = (props) => {
//   return (<div>
//     <h1>Hello {props.name}.</h1>
//     <h2>Hello {props.age}.</h2>
//   </div>);
// }

class Person extends React.Component {
  render() {
    return (<div>
      <h1>Hello {this.props.name}.</h1>
      <h2>Hello {this.props.age}.</h2>
    </div>);
  }
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
      name: "Allison"
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