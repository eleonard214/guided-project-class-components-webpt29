import React, { useState } from "react";

const Person = (props) => {
  return (<div>
    <h1>Hello {name}.</h1>
    <h1>That is a great name {name}! Never change your name, {name}.</h1>
    <h2>Are you {age}?</h2>
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
      <Person name={"Warren"} age={9} />
      <button onClick={handleClick}>Change the name</button>
    </div>
  );
};

export default App;