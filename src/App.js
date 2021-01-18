import { useState } from "react";
import Button from "./Button/Button";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText("Hire Me!");
  };
  return (
    <div className="App">
      <div className="display-text">{text}</div>
      <Button onClick={handleClick}>Click Me!</Button>
    </div>
  );
}

export default App;
