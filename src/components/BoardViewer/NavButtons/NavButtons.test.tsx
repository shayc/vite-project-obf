import { render, screen } from "../../../utils/test-utils";
import { NavButtons } from "./NavButtons";

it("Should render", () => {
  render(<NavButtons />);

  const nav = screen.getByRole("navigation", { name: "Board navigation" });

  expect(nav).toBeDefined();
});
