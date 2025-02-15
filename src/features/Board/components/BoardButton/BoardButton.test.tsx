import { render, screen, userEvent } from "../../../../utils/test-utils";
import { BoardButton } from "./BoardButton";

it("Should return posts when clicking fetch button", async () => {
  const handleClick = vi.fn();
  render(<BoardButton onClick={handleClick}>Hello world</BoardButton>);

  const button = screen.getByRole("button", { name: "Hello world" });
  await userEvent.click(button);

  expect(button).toBeDefined();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
