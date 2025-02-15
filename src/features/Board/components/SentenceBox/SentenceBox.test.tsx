import { render, screen } from "../../../../utils/test-utils";
import { SentenceBox } from "./SentenceBox";

it("Should render", () => {
  render(
    <SentenceBox
      value={[]}
      onBackspaceClick={() => null}
      onClearClick={() => null}
    />,
  );

  const sentenceBox = screen.getByLabelText("Sentence box");

  expect(sentenceBox).toBeDefined();
});
