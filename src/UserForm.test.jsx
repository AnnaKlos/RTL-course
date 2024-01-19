import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  render(<UserForm />);
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", () => {
  const mock = jest.fn();
  // const argList = [];
  // const callback = (...args) => {
  //   argList.push(args);
  // };
  // render(<UserForm onUserAdd={callback} />);
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");

  user.click(nameInput);
  user.keyboard("test");
  user.click(emailInput);
  user.keyboard("test@test.com");

  const button = screen.getByRole("button");

  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "test", email: "test@test.com" });
  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: "test", email: "test@test.com" });
});

// test('name', () => {
//   **Render the component**

//   **Manipulate the component or find an element in it**

//   **Assertion - make sure the component is doing what we expect it to do**
// })
