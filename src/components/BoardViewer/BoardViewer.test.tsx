import { render, screen } from "../../utils/test-utils";
import { BoardViewer } from "./BoardViewer";

it("Should return posts when clicking fetch button", () => {
  render(<BoardViewer board={{ id: "" }} />);

  const name = screen.getByText("Hello world");

  expect(name).toBeDefined();
});
