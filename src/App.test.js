import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("renders App", () => {
  render(<App />);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

test("can receive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  user.click(nameInput);
  user.keyboard("test");
  user.click(emailInput);
  user.keyboard("test@test.com");

  const button = screen.getByRole("button");

  user.click(button);

  // screen.debug();
  const name = screen.getByRole("cell", { name: "test" });
  const email = screen.getByRole("cell", { name: "test@test.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
