import { render, screen } from "../../utils/test-utils";
import { BoardViewer } from "./BoardViewer";

it("Should render", () => {
  render(<BoardViewer board={{ id: "", name: "Board" }} />);

  const nav = screen.getByRole("navigation", { name: "Board navigation" });
  const grid = screen.getByRole("grid", { name: "Board grid" });

  expect(nav).toBeDefined();
  expect(grid).toBeDefined();
});
