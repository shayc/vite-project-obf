import { render, screen } from "../../../utils/test-utils";
import { NavBar } from "./NavBar";

it("Should not throw", () => {
  render(<NavBar />);

  const nav = screen.getByRole("navigation", { name: "Board navigation" });

  expect(nav).toBeDefined();
});
