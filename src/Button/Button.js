import React from "react";
import "./Button.css";

export default function Button({ onClick, children }) {
  return <button onClick={() => onClick()}>{children}</button>;
}
