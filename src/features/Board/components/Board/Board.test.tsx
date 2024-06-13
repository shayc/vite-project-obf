import { render, screen } from "../../../../utils/test-utils";
import { Board } from "./Board";

it("Should render", () => {
  render(<Board board={{ id: "", name: "Board" }} />);

  const nav = screen.getByRole("navigation", { name: "Board navigation" });
  const grid = screen.getByRole("grid", { name: "Board grid" });

  expect(nav).toBeDefined();
  expect(grid).toBeDefined();
});
