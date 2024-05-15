import { render, screen } from "../../../utils/test-utils";
import { Output } from "./Output";

it("Should return posts when clicking fetch button", () => {
  render(<Output />);

  const output = screen.getByLabelText("Board output");

  expect(output).toBeDefined();
});
