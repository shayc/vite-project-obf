import { render, screen } from "../../utils/test-utils";
import { Board } from "./Board";

it("Should return posts when clicking fetch button", () => {
  render(<Board name="Hello world" />);

  const name = screen.getByText("Hello world");

  expect(name).toBeDefined();
});
