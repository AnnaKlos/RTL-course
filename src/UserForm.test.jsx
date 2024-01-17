import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };
  render(<UserForm onUserAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole("textbox");

  await user.click(nameInput);
  await user.keyboard("test");
  await user.click(emailInput);
  await user.keyboard("test@test.com");

  const button = screen.getByRole("button");

  await user.click(button);

  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "test", email: "test@test.com" });
});

// test('name', () => {
//   **Render the component**

//   **Manipulate the component or find an element in it**

//   **Assertion - make sure the component is doing what we expect it to do**
// })
