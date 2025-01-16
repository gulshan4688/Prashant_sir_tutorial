import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import counterStore from "./store/index.js";
import {Provider} from "react-redux"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={counterStore} >
      <App />
    </Provider>
  </StrictMode>
);
