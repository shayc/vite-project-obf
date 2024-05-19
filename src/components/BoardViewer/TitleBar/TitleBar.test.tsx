import { render, screen } from "../../../utils/test-utils";
import { SentenceBox } from "./TitleBar";

it("Should render", () => {
  render(<SentenceBox />);

  const sentenceBox = screen.getByLabelText("Sentence box");

  expect(sentenceBox).toBeDefined();
});
