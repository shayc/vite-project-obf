import { render, screen } from "../../../utils/test-utils";
import { NavButtons } from "./NavButtons";

it("Should render", () => {
  render(<NavButtons />);

  const navButtons = screen.getByLabelText("Board navigation");

  expect(navButtons).toBeDefined();
});
