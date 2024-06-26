import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";

import { store } from "./redux/store.ts";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* configure redux store in react app */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
