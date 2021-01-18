import {
  fireEvent,
  getByText,
  queryByText,
  render,
} from "@testing-library/react";
import App from "./App";

test("renders text on button click", () => {
  const { container } = render(<App />);
  expect(queryByText(container, "The best tool for every job")).toBeFalsy();
  fireEvent(
    getByText(container, "circleci"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(getByText(container, "The best tool for every job")).toBeTruthy();
});
