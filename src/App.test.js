import {
  fireEvent,
  getByText,
  queryByText,
  render,
} from "@testing-library/react";
import App from "./App";

test("renders text on button click", () => {
  const { container } = render(<App />);
  expect(queryByText(container, "Hire Me!")).toBeFalsy();
  fireEvent(
    getByText(container, "Click Me!"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(getByText(container, "Hire Me!")).toBeTruthy();
});
