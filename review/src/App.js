import React, { useState } from "react";

const Person = (props) => {
  return (<div>
    <h1>Hello {props.name}.</h1>
    <h1>That is a great name {props.name}! Never change your name, {props.name}.</h1>
    <h2>Are you {props.age}?</h2>
  </div>);
}

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(34);

  const handleClick = () => {
    setName("Allison");
    setAge(12);
  }

  return (
    <div>
      <Person name={name} age={age} />
      <Person name={name} age={age} />
      <Person name={name} age={age} />
      <button onClick={handleClick}>Change the name</button>
    </div>
  );
};

export default App;