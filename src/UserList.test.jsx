import { render, screen, within } from "@testing-library/react";
import UsersList from "./UsersList";

function renderComponent() {
  const users = [
    { name: "test", email: "test@test.com" },
    { name: "xyz", email: "xyz@xyz.pl" },
  ];

  render(<UsersList users={users} />);

  return {
    users,
  };
}

test("render one row per user", () => {
  // screen.logTestingPlaygroundURL();
  renderComponent();
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);

  // second way to Fallback the problem with finding elements => using container.querySelector()
  // const { container } = render(<UsersList users={users} />);
  // // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");
  // expect(rows).toHaveLength(2);
});

test("render the name and the email of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
