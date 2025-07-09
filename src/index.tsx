import "~/assets/styles/base.css";

import { createRoot } from "react-dom/client";

import App from "./components/App";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container, {
    onUncaughtError(error, errorInfo) {
      console.log("Uncaught Error", error, errorInfo);
    },
  });

  root.render(<App />);
}
