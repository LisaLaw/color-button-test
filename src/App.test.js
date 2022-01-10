import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find element with role button and text `change to blue`
  const btn = screen.getByRole("button", { name: "Change to blue" });

  // expect bg color to be red
  expect(btn).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue on click", () => {
  render(<App />);
  const btn = screen.getByRole("button", { name: "Change to blue" });

  expect(btn).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(btn);

  expect(btn).toHaveStyle({ backgroundColor: "blue" });
  expect(btn).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check btn starts out enabled
  const btn = screen.getByRole("button");
  expect(btn).toBeEnabled();

  // check box starts out unchecked
  const box = screen.getByRole("checkbox");
  expect(box).not.toBeChecked();
});

test("disable button on clicking checkbox", () => {
  render(<App />);
  const box = screen.getByRole("checkbox");
  const btn = screen.getByRole("button");

  fireEvent.click(box);

  expect(btn).toBeDisabled();

  fireEvent.click(box);

  expect(btn).toBeEnabled();
});
