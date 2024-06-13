import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { AppProviders } from "./AppProviders.tsx";
import { App } from "./App.tsx";
import "./index.css";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser.ts");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

void enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppProviders>
        <App />
      </AppProviders>
    </StrictMode>,
  );
});
