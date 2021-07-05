import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(34);

  return (
    <div>
      <h1>Hello {name}.</h1>
      <h2>Are you {age}?</h2>
      <button onClick={() => {
        console.log("clcked it!!");
      }}>Change the name</button>
    </div>
  );
};

export default App;