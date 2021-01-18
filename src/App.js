import { useState } from "react";
import Button from "./Button/Button";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const handleClick = () => {
    setText("The best tool for every job");
  };
  return (
    <div className="App">
      <div className="display-container">
        {/* <div className="display-box"> */}
        <div className="display-text">{text}</div>
        <Button onClick={handleClick}>circleci</Button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
