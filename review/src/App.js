import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Warren");
  const [age, setAge] = useState(34);

  return (
    <div>
      <h1>Hello {name}.</h1>
    </div>
  );
};

export default App;