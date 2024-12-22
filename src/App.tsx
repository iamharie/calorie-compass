import { useState } from "react";

import UserInput from "./components/UserInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Calorie Compass</h1>
      <UserInput />
    </>
  );
}

export default App;
