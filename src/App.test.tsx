import { App } from "./App";
import { posts } from "./mocks/handlers";
import { render, screen, userEvent } from "./utils/test-utils";

it("Should return posts when clicking fetch button", async () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "App",
      level: 1,
    }),
  ).toBeDefined();

  await userEvent.click(screen.getByRole("button", { name: "Fetch Posts" }));

  for (const post of posts) {
    expect(
      await screen.findByRole("heading", { name: post.title, level: 2 }),
    ).toBeDefined();
    expect(screen.getByText(post.body)).toBeDefined();
  }
});
