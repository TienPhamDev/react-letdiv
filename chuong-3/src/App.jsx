import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyComponent from "./Components/MyComponent";
import ExampleComponent from "./Components/ExampleComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ExampleComponent />
    </>
  );
}

export default App;
