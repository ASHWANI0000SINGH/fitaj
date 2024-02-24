import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dummy from "./Dummy";

test("multiple_ele_testing", async () => {
  userEvent.setup();
  render(<Dummy />);

  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
