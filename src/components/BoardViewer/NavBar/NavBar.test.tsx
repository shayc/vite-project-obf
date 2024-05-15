import { render, screen } from "../../../utils/test-utils";
import { NavBar } from "./NavBar";

it("Should render", () => {
  render(<NavBar />);

  const nav = screen.getByRole("navigation", { name: "Board navigation" });

  expect(nav).toBeDefined();
});
