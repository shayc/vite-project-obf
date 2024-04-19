import { render, screen } from "../../../utils/test-utils";
import { Output } from "./Output";

it("Should return posts when clicking fetch button", () => {
  render(<Output />);

  const label = screen.getByText("Hello world");

  expect(label).toBeDefined();
});
