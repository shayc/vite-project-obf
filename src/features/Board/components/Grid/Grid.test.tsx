import { render, screen } from "../../../../utils/test-utils";
import { Grid } from "./Grid";

it("Should render", () => {
  render(<Grid rows={3} columns={3} />);

  const grid = screen.getByRole("grid", { name: "Board grid" });

  expect(grid).toBeDefined();
});
