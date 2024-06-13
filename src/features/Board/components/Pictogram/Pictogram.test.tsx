import { render, screen } from "../../../../utils/test-utils";
import { Pictogram } from "./Pictogram";

it("Should return posts when clicking fetch button", () => {
  render(<Pictogram src="" label="Hello world" />);

  const label = screen.getByText("Hello world");

  expect(label).toBeDefined();
});
