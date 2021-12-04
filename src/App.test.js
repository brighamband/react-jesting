import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn this framework/i);
  expect(linkElement).toBeInTheDocument();
});

test("name updates with input", () => {
  const { queryByTestId } = render(<App />);
  const nameInput = queryByTestId("name-input");

  // Default - empty input
  expect(nameInput).toBeTruthy();
  expect(nameInput.value).toBe("");

  // Type name into input
  fireEvent.change(nameInput, { target: { value: "Bob" } });
  expect(nameInput.value).toBe("Bob");
});
