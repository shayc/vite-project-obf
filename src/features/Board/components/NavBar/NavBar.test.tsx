import { render, screen } from "../../../../utils/test-utils";
import { NavBar } from "./NavBar";

it("Should render", () => {
  render(<NavBar />);

  const navBar = screen.getByLabelText("Board navigation");

  expect(navBar).toBeDefined();
});
