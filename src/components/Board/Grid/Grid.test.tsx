import { render, screen, userEvent } from "../../../utils/test-utils";
import { Grid } from "./Grid";

it("Should return posts when clicking fetch button", async () => {
  const handleClick = vi.fn();
  render(<Grid />);

  const button = screen.getByRole("button", { name: "Hello world" });
  await userEvent.click(button);

  expect(button).toBeDefined();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
