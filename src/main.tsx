import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SpeechProvider } from "./hooks/speech/speech-context.tsx";
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
    <React.StrictMode>
      <FluentProvider theme={webDarkTheme}>
        <SpeechProvider>
          <App />
        </SpeechProvider>
      </FluentProvider>
    </React.StrictMode>,
  );
});
